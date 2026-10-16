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
| 2026-10-13 11:30 | 10:11 | 0/0/0 | 0/1/0 | 0/0/0 | 83,164/5,635 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Baudoux_2010_cfu](drugs/drug_quinupristin_dalfopristin/pd_Baudoux_2010_cfu.md) | concentration-response curves in broth and after phagocytosis by THP-1 macrophages ← quinupristin_dalfopristin · direct sigmoid Emax (Hill) effect | — | Baudoux P et al., Activity of quinupristin/dalfopristin a…, The Journal of antimicrobia… (2010) | [10.1093/jac/dkq110](https://doi.org/10.1093/jac/dkq110) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 82 returned
- **screened:** 7  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johnson_1999.pdf` | Johnson CA et al., Pharmacokinetics of quinupristin-dalfop…, Antimicrobial agents and ch… (1999) | popPK | 10 | [10.1128/AAC.43.1.152](https://doi.org/10.1128/AAC.43.1.152) | [9869581](https://pubmed.ncbi.nlm.nih.gov/9869581) | The study reports quantitative PK parameters for quinupristin-dalfopristin, but the specific numeric values are not present in the provided abstract text. |
| `Bearden_2004.pdf` | Bearden DT, Clinical pharmacokinetics of quinuprist…, Clinical pharmacokinetics (2004) | popPK | 9 | [10.2165/00003088-200443040-00003](https://doi.org/10.2165/00003088-200443040-00003) | [15005638](https://pubmed.ncbi.nlm.nih.gov/15005638) | The text provides specific quantitative PK parameters including clearance, volume of distribution, and half-life for quinupristin and dalfopristin. |
| `Chevalier_2001.pdf` | Chevalier P et al., Multiple-dose pharmacokinetics and safe…, Journal of clinical pharmac… (2001) | popPK | 9 | [10.1177/00912700122010267](https://doi.org/10.1177/00912700122010267) | [11304897](https://pubmed.ncbi.nlm.nih.gov/11304897) | The study reports quantitative PK parameters (clearance ~0.90 l/h/kg) for quinupristin/dalfopristin in humans, though specific volume and half-life values are not explicitly listed in the provided text. |
| `Bergeron_1997.pdf` | Bergeron M et al., The pharmacokinetics of quinupristin/da…, The Journal of antimicrobia… (1997) | popPK | 8 | [10.1093/jac/39.suppl_1.129](https://doi.org/10.1093/jac/39.suppl_1.129) | [9511077](https://pubmed.ncbi.nlm.nih.gov/9511077) | The paper reports quantitative half-lives for quinupristin and dalfopristin in humans and animals, but lacks specific clearance or volume values. |
| `Chevalier_2000.pdf` | Chevalier P et al., Pharmacokinetics of quinupristin/ dalfo…, Clinical pharmacokinetics (2000) | popPK | 8 | [10.2165/00003088-200039010-00005](https://doi.org/10.2165/00003088-200039010-00005) | [10926351](https://pubmed.ncbi.nlm.nih.gov/10926351) | The study reports PK parameters for quinupristin/dalfopristin in humans, but the evidence provided only contains relative ratios (e.g., 1.4 times higher) and qualitative descriptions, lacking the specific absolute numeric values for CL, V, or half-life. |
| `Kim_2002.pdf` | Kim MK et al., Clearance of quinupristin-dalfopristin…, The International journal o… (2002) | popPK | 8 | [10.1177/039139880202500106](https://doi.org/10.1177/039139880202500106) | [11853069](https://pubmed.ncbi.nlm.nih.gov/11853069) | The study reports quantitative clearance values for the main active metabolites of quinupristin-dalfopristin in a swine model, which constitutes relevant PK data for the drug's disposition. |
| `Huang_2005.pdf` | Huang V et al., Pharmacodynamics of cefepime alone and…, Antimicrobial agents and ch… (2005) | pd | 5 | [10.1128/AAC.49.1.302-308.2005](https://doi.org/10.1128/AAC.49.1.302-308.2005) | [15616309](https://www.ncbi.nlm.nih.gov/pubmed/15616309) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Allen_2002.pdf` | Allen GP et al., In vitro activities of quinupristin-dal…, Antimicrobial agents and ch… (2002) | pd | 4 | [10.1128/AAC.46.8.2606-2612.2002](https://doi.org/10.1128/AAC.46.8.2606-2612.2002) | [12121940](https://www.ncbi.nlm.nih.gov/pubmed/12121940) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Baudoux_2010.pdf` | Baudoux P et al., Activity of quinupristin/dalfopristin a…, The Journal of antimicrobia… (2010) | pd | 4 | [10.1093/jac/dkq110](https://doi.org/10.1093/jac/dkq110) | [20378672](https://www.ncbi.nlm.nih.gov/pubmed/20378672) | metadata signals extractable PD data (Emax) |
| `Cha_2003.pdf` | Cha R et al., Bactericidal activities of daptomycin,…, Antimicrobial agents and ch… (2003) | pd | 4 | [10.1128/AAC.47.12.3960-3963.2003](https://doi.org/10.1128/AAC.47.12.3960-3963.2003) | [14638509](https://www.ncbi.nlm.nih.gov/pubmed/14638509) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-13T11:29:54.690771+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aeschlimann_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic analysis (time-kill curves and postantibiotic effects) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Allen_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic evaluation of antimicrobial combinations and does not report pharmacokinetic parameters. |
| popPK | Banwan_2009 | irrelevant | 2 | 0 | This is a review article discussing mechanism of action and general pharmacokinetics without providing specific quantitative disposition parameter values for quinupristin/dalfopristin in the provided text. |
| popPK | Barry_1997 | irrelevant | 0 | 0 | The study is an in vitro susceptibility test comparing MICs, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Barton_2009 | irrelevant | 0 | 0 | The paper is a review of future treatment options for Gram-positive infections and does not report original quantitative pharmacokinetic parameters for quinupristin-dalfopristin. |
| popPK | Batard_2002 | irrelevant | 1 | 0 | The study is an experimental efficacy trial in rabbits that simulates human PK dosing but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for quinupristin-dalfopristin. |
| PGx | Batard_2002 | not_relevant | 0 | 0 | The study reports a bacterial resistance mechanism (ermA gene) affecting antibiotic susceptibility, not a human pharmacogenomic effect on pharmacokinetics or pharmacodynamics. |
| popPK | Baudoux_2010 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (MICs, Emax, EC50) and antimicrobial activity, not pharmacokinetic disposition parameters. |
| popPK | Cha_2003 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study assessing bactericidal activity, not a pharmacokinetic study reporting disposition parameters for quinupristin-dalfopristin. |
| popPK | Chant_1995 | irrelevant | 2 | 0 | This is a review article that summarizes pharmacokinetics qualitatively (e.g., "metabolized rapidly") but does not provide specific quantitative disposition parameters (CL, V, t1/2) in the provided text. |
| popPK | Chevalier_2000 | relevant | 8 | 2 | The study reports PK parameters for quinupristin/dalfopristin in humans, but the evidence provided only contains relative ratios (e.g., 1.4 times higher) and qualitative descriptions, lacking the specific absolute numeric values for CL, V, or half-life. |
| popPK | Delgado_2000 | irrelevant | 1 | 0 | The paper is a qualitative overview/review that discusses pharmacokinetic properties (hepatic metabolism, biliary excretion) but does not report specific quantitative parameter values (CL, V, t1/2) in the provided text. |
| popPK | European_2018 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | European_2020 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | European_2021 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | European_2022 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | European_2023 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | Goldstein_2005 | irrelevant | 0 | 0 | The study is an in vitro antimicrobial susceptibility assay (MICs) and does not report pharmacokinetic parameters for quinupristin-dalfopristin. |
| popPK | Gostelow_2014 | irrelevant | 3 | 5 | The paper is a review that cites adult PK parameters (Vd, CL, T1/2) for quinupristin/dalfopristin, but it does not report original quantitative data or population models, and explicitly states no pediatric PK studies were identified. |
| popPK | Griswold_1996 | irrelevant | 4 | 2 | The paper is a review that reports only summary PK metrics (Cmax, half-life) without the specific quantitative disposition parameters (CL, V, Q, ka) or compartmental model required for extraction. |
| popPK | Hamilton_2001 | irrelevant | 0 | 0 | The paper is a general review of anti-Gram-positive agents and does not report any quantitative pharmacokinetic parameters for quinupristin/dalfopristin. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis patients and does not report any pharmacokinetic parameters for quinupristin_dalfopristin. |
| popPK | Johnson_1999 | relevant | 10 | 0 | The study reports quantitative PK parameters for quinupristin-dalfopristin, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kang_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model using simulated dosing, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for quinupristin/dalfopristin. |
| popPK | Ke_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pristinamycin (PIA and PIIA) in beagle dogs, using quinupristin only as an internal standard for the analytical method. |
| popPK | Kruse_2007 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values for cell toxicity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and contains no pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | Lemaire_2008 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility and intracellular activity in vitro, not pharmacokinetic disposition parameters. |
| popPK | Linden_2002 | irrelevant | 0 | 0 | The paper is a review of treatment options for VRE infections and does not report any quantitative pharmacokinetic parameters (clearance, volume, etc.) for quinupristin-dalfopristin. |
| popPK | Low_1995 | irrelevant | 2 | 0 | The paper is a review of pharmacology and clinical experience without original quantitative PK parameter values in the provided text. |
| popPK | Mathur_2004 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay comparing the activity of ranbezolid against quinupristin/dalfopristin, with no pharmacokinetic parameters reported. |
| popPK | Mercuro_2018 | irrelevant | 0 | 0 | This is a pharmacotherapy review that discusses quinupristin/dalfopristin qualitatively but does not report original quantitative PK parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper is a general review of cisapride interactions that lists quinupristin/dalfopristin as a drug to avoid, but it does not report any pharmacogenomic data (gene variants) or specific quantitative changes in PK/PD parameters. |
| popPK | Millrose_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of cytotoxicity and proinflammatory markers, not a pharmacokinetic study. |
| PGx | Nguyen_2009 | not_relevant | 0 | 0 | The paper investigates the effect of bacterial phenotypes (SCV vs normal) on antibiotic efficacy, not the effect of human host gene variants or genotypes on PK/PD parameters. |
| PGx | Okado_2018 | not_relevant | 0 | 0 | The paper investigates bacterial resistance mechanisms (MRSA) and in vitro antibiotic efficacy, not human pharmacogenomics or the effect of host gene variants on drug PK/PD. |
| popPK | Osman_2022 | irrelevant | 0 | 0 | The paper is a surveillance study of antimicrobial resistance in canine enterococci and does not contain any pharmacokinetic data for quinupristin_dalfopristin. |
| popPK | Pai_2007 | irrelevant | 1 | 0 | The paper is a review discussing dosing considerations in obesity and mentions quinupristin-dalfopristin only qualitatively without providing specific quantitative PK parameter values. |
| popPK | Polso_2014 | irrelevant | 2 | 0 | This is a review article discussing dosing guidelines in obese patients and does not report original quantitative pharmacokinetic parameter values for quinupristin/dalfopristin. |
| popPK | Putnam_1997 | irrelevant | 0 | 0 | The paper reports in vitro antimicrobial activity (MICs) and quality control guidelines, not pharmacokinetic parameters. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibiotics and does not report quantitative pharmacokinetic parameters for quinupristin_dalfopristin. |
| popPK | Schwenger_2002 | irrelevant | 2 | 0 | The paper is a clinical case report on efficacy that mentions PK was determined but provides no quantitative PK parameter values (CL, V, etc.) in the evidence. |
| popPK | Soriano_2004 | irrelevant | 0 | 0 | The paper is a general review of pharmacodynamic principles and does not report specific quantitative pharmacokinetic parameters for quinupristin/dalfopristin. |
| popPK | Summers_2001 | irrelevant | 0 | 0 | This is a clinical case report describing the treatment of osteomyelitis, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Tamma_2014 | irrelevant | 0 | 0 | This is a clinical review comparing treatment options for VRE bacteremia and does not report original quantitative pharmacokinetic parameters for quinupristin-dalfopristin. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The paper is an antimicrobial resistance surveillance study reporting susceptibility rates, not a pharmacokinetic study with disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
