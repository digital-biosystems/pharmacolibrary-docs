<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;quinupristin/dalfopristin&quot;}]"></div>

# quinupristin/dalfopristin

- **generic name:** quinupristin/dalfopristin
- **ATC codes:** `J01FG02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Quinupristin/dalfopristin is a combination antibiotic used to treat bacterial infections. It is classified among streptogramin antibacterials for systemic use, but the available facts do not indicate how widely it is used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1763990](https://www.wikidata.org/wiki/Q1763990) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:19 | 1:00 | 0/0/0 | 1/1/0 | 0/0/0 | 23,905/1,851 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kruse_2007_CV_assay](drugs/drug_quinupristin_dalfopristin/pd_Kruse_2007_CV_assay.md) | cytotoxicity (crystal violet) ← quinupristin/dalfopristin · direct sigmoid Emax (Hill) effect | — | Kruse M et al., Effect of quinupristin/dalfopristin on…, Archives of toxicology (2007) | [10.1007/s00204-006-0163-4](https://doi.org/10.1007/s00204-006-0163-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kruse_2007_NR_uptake](drugs/drug_quinupristin_dalfopristin/pd_Kruse_2007_NR_uptake.md) | cytotoxicity (neutral red uptake) ← quinupristin/dalfopristin · direct sigmoid Emax (Hill) effect | — | Kruse M et al., Effect of quinupristin/dalfopristin on…, Archives of toxicology (2007) | [10.1007/s00204-006-0163-4](https://doi.org/10.1007/s00204-006-0163-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Baudoux_2010_cfu](drugs/drug_quinupristin_dalfopristin/pd_Baudoux_2010_cfu.md) | concentration-response curves in broth and after phagocytosis by THP-1 macrophages ← quinupristin_dalfopristin · direct sigmoid Emax (Hill) effect | — | Baudoux P et al., Activity of quinupristin/dalfopristin a…, The Journal of antimicrobia… (2010) | [10.1093/jac/dkq110](https://doi.org/10.1093/jac/dkq110) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Allen_2002.pdf` | Allen GP et al., In vitro activities of quinupristin-dal…, Antimicrobial agents and ch… (2002) | pd | 4 | [10.1128/AAC.46.8.2606-2612.2002](https://doi.org/10.1128/AAC.46.8.2606-2612.2002) | [12121940](https://www.ncbi.nlm.nih.gov/pubmed/12121940) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Baudoux_2010.pdf` | Baudoux P et al., Activity of quinupristin/dalfopristin a…, The Journal of antimicrobia… (2010) | pd | 4 | [10.1093/jac/dkq110](https://doi.org/10.1093/jac/dkq110) | [20378672](https://www.ncbi.nlm.nih.gov/pubmed/20378672) | metadata signals extractable PD data (Emax) |
| `Cha_2003.pdf` | Cha R et al., Bactericidal activities of daptomycin,…, Antimicrobial agents and ch… (2003) | pd | 4 | [10.1128/AAC.47.12.3960-3963.2003](https://doi.org/10.1128/AAC.47.12.3960-3963.2003) | [14638509](https://www.ncbi.nlm.nih.gov/pubmed/14638509) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:18:46.800291+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic evaluation of antimicrobial combinations and does not report pharmacokinetic parameters. |
| PGx | Batard_2002 | not_relevant | 0 | 0 | The study reports a bacterial resistance mechanism (ermA gene) affecting antibiotic susceptibility, not a human pharmacogenomic effect on pharmacokinetics or pharmacodynamics. |
| popPK | Baudoux_2010 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (MICs, Emax, EC50) and antimicrobial activity, not pharmacokinetic disposition parameters. |
| popPK | Cha_2003 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study assessing bactericidal activity, not a pharmacokinetic study reporting disposition parameters for quinupristin-dalfopristin. |
| popPK | Kruse_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values for cell toxicity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lemaire_2008 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility and intracellular activity in vitro, not pharmacokinetic disposition parameters. |
| popPK | Linden_2002 | irrelevant | 0 | 0 | The paper is a review of treatment options for VRE infections and does not report any quantitative pharmacokinetic parameters (clearance, volume, etc.) for quinupristin-dalfopristin. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper is a general review of cisapride interactions that lists quinupristin/dalfopristin as a drug to avoid, but it does not report any pharmacogenomic data (gene variants) or specific quantitative changes in PK/PD parameters. |
| popPK | Millrose_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cytotoxicity and proinflammatory markers, not a pharmacokinetic study. |
| PGx | Nguyen_2009 | not_relevant | 0 | 0 | The paper investigates the effect of bacterial phenotypes (SCV vs normal) on antibiotic efficacy, not the effect of human host gene variants or genotypes on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
