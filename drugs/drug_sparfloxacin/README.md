<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;sparfloxacin&quot;}]"></div>

# sparfloxacin

- **generic name:** sparfloxacin
- **ATC codes:** `J01MA09`
- **DrugBank:** [DB01208](https://go.drugbank.com/drugs/DB01208) · **PubChem:** [CID 60464](https://pubchem.ncbi.nlm.nih.gov/compound/60464)
- **molar mass:** 392.3998 g/mol (C19H22F2N4O3) — DrugBank
- **groups:** approved, withdrawn

## About

Sparfloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections such as pneumonia, bronchitis, and other respiratory, staphylococcal, and gram-negative infections. It has been withdrawn from the market because of serious safety concerns, including heart rhythm problems and severe skin reactions to sunlight.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q976559](https://www.wikidata.org/wiki/Q976559) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:23 | 1:11 | 0/0/0 | 0/1/0 | 0/0/0 | 25,470/2,087 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bischoff_2000_HERG](drugs/drug_sparfloxacin/pd_Bischoff_2000_HERG.md) | HERG outward currents ← sparfloxacin · direct Emax (saturable) effect | — | Bischoff U et al., Effects of fluoroquinolones on HERG cur…, European journal of pharmac… (2000) | [10.1016/s0014-2999(00)00693-2](https://doi.org/10.1016/s0014-2999(00)00693-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sparfloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ritz_1994.pdf` | Ritz M et al., Multiple-dose pharmacokinetics of sparf…, Antimicrobial agents and ch… (1994) | popPK | 10 | [10.1128/AAC.38.3.455](https://doi.org/10.1128/AAC.38.3.455) | [8203837](https://pubmed.ncbi.nlm.nih.gov/8203837) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for sparfloxacin in humans, with all numeric values explicitly present in the abstract. |
| `Marchand_2001.pdf` | Marchand S et al., A pharmacokinetic/pharmacodynamic appro…, The Journal of antimicrobia… (2001) | pd | 5 | [10.1093/jac/48.6.813](https://doi.org/10.1093/jac/48.6.813) | [11733465](https://www.ncbi.nlm.nih.gov/pubmed/11733465) | metadata signals extractable PD data (Emax) |
| `Ross_2001.pdf` | Ross GH et al., Fluoroquinolone resistance in anaerobic…, Antimicrobial agents and ch… (2001) | pd | 5 | [10.1128/AAC.45.7.2136-2140.2001](https://doi.org/10.1128/AAC.45.7.2136-2140.2001) | [11408238](https://www.ncbi.nlm.nih.gov/pubmed/11408238) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Beberok_2015.pdf` | Beberok A et al., Impact of sparfloxacin on melanogenesis…, Pharmacological reports : PR (2015) | pd | 4 | [10.1016/j.pharep.2014.07.015](https://doi.org/10.1016/j.pharep.2014.07.015) | [25560573](https://www.ncbi.nlm.nih.gov/pubmed/25560573) | metadata signals extractable PD data (EC50) |
| `Pal_2006.pdf` | Pal D et al., MDR- and CYP3A4-mediated drug-drug inte…, Journal of neuroimmune phar… (2006) | pgx | 7 | [10.1007/s11481-006-9034-2](https://doi.org/10.1007/s11481-006-9034-2) | [18040809](https://www.ncbi.nlm.nih.gov/pubmed/18040809) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T12:22:36.730563+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bischoff_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel inhibition and does not report pharmacokinetic disposition parameters. |
| popPK | Delon_1999 | irrelevant | 2 | 0 | The paper focuses on convulsant activity and relative CSF-to-plasma concentration ratios in rats, but does not provide standard population-pharmacokinetic parameters (CL, V, ka) or extractable numeric disposition values for sparfloxacin. |
| popPK | Kamberi_1999 | irrelevant | 2 | 0 | The study focuses on ciprofloxacin pharmacokinetics, using sparfloxacin only as a comparator in in vitro antimicrobial activity tests, with no PK parameters reported for sparfloxacin. |
| popPK | Kihira_2004 | irrelevant | 0 | 0 | The paper is a PK-PD simulation study for fluoroquinolones against anthrax using ciprofloxacin data in monkeys, where sparfloxacin is a secondary drug evaluated via simulation rather than a subject of original PK parameter measurement. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | The study focuses on blood-brain barrier permeability and in vitro uptake mechanisms rather than reporting systemic population pharmacokinetic parameters like clearance or volume for sparfloxacin. |
| popPK | Madaras-Kelly_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study of bacterial resistance mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for sparfloxacin. |
| popPK | Marchand_2001 | irrelevant | 1 | 0 | The study investigates a pharmacodynamic interaction (proconvulsant effect of BPAA) and reports efficacy/potency parameters (CCSF ratios, IC50), not standard quantitative disposition parameters (CL, V, ka, t1/2) for sparfloxacin. |
| PGx | Pal_2006 | not_relevant | 1 | 0 | The paper discusses sparfloxacin as an inhibitor of P-glycoprotein in the context of drug-drug interactions, not as a substrate whose PK is modified by a pharmacogenomic variant. |
| popPK | Ross_2001 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic investigation focusing on bacterial resistance mechanisms (MICs) rather than reporting quantitative disposition parameters (CL, V, etc.) for the host. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
