<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;hexachlorophene&quot;}]"></div>

# hexachlorophene

- **generic name:** hexachlorophene
- **ATC codes:** `D08AE01`
- **DrugBank:** [DB00756](https://go.drugbank.com/drugs/DB00756) · **PubChem:** [CID 3598](https://pubchem.ncbi.nlm.nih.gov/compound/3598)
- **molar mass:** 406.904 g/mol (C13H6Cl6O2) — DrugBank
- **groups:** approved, withdrawn

## About

Hexachlorophene is a phenol-derived antiseptic that was used to treat skin infections and acne. It has been withdrawn from use because of safety concerns, particularly neurological harm, and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425362](https://www.wikidata.org/wiki/Q425362) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.50).">human + animal</span> | [Jin_2026_CYP19A1_activity](drugs/drug_hexachlorophene/pd_Jin_2026_CYP19A1_activity.md) | aromatase activity ← hexachlorophene · inhibition effect | — | Jin W et al., Chlorinated bis-phenolic disinfectants…, Chemico-biological interact… (2026) | [10.1016/j.cbi.2026.112236](https://doi.org/10.1016/j.cbi.2026.112236) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aggarwal_2020_NAPE_PLD_activity](drugs/drug_hexachlorophene/pd_Aggarwal_2020_NAPE_PLD_activity.md) | NAPE-PLD activity ← hexachlorophene · direct log-linear effect | — | Aggarwal G et al., Symmetrically substituted dichlorophene…, The Journal of biological c… (2020) | [10.1074/jbc.RA120.013362](https://doi.org/10.1074/jbc.RA120.013362) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:47 | 0:34 | 0/0/0 | 1/1/0 | 0/0/0 | 77,236/1,343 | einfracz / qwen3.8-27b | 4 | 2/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fu_2022.pdf` | Fu NJ et al., Hexachlorophene, a selective SHP2 inhib…, Toxicology and applied phar… (2022) | pd | 4 | [10.1016/j.taap.2022.115988](https://doi.org/10.1016/j.taap.2022.115988) | [35307375](https://www.ncbi.nlm.nih.gov/pubmed/35307375) | metadata signals extractable PD data (IC50) |
| `Lokanatha_1999.pdf` | Lokanatha V et al., In vitro kinetics of the rat brain succ…, Journal of biochemical and… (1999) | pd | 4 | [10.1002/(sici)1099-0461(1999)13:6&lt;303::aid-jbt3&gt;3.0.co;2-3](https://doi.org/10.1002/(sici)1099-0461(1999)13:6<303::aid-jbt3>3.0.co;2-3) | [10487417](https://www.ncbi.nlm.nih.gov/pubmed/10487417) | metadata signals extractable PD data (IC50) |
| `Matsumura_1997.pdf` | Matsumura H et al., Cooperative inhibition of acetylcholine…, Archives of toxicology (1997) | pd | 4 | [10.1007/s002040050369](https://doi.org/10.1007/s002040050369) | [9049051](https://www.ncbi.nlm.nih.gov/pubmed/9049051) | metadata signals extractable PD data (sigmoid) |
| `Zhai_2023.pdf` | Zhai Y et al., The analysis of pesticides and fungicid…, Toxicology letters (2023) | pd | 4 | [10.1016/j.toxlet.2023.03.002](https://doi.org/10.1016/j.toxlet.2023.03.002) | [36965607](https://www.ncbi.nlm.nih.gov/pubmed/36965607) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T21:47:47.497722+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2020 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study identifying hexachlorophene as a NAPE-PLD inhibitor, reporting no pharmacokinetic parameters (CL, V, etc.). |
| popPK | Cao_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Cao_2015 | not_relevant | 0 | 0 | The paper describes a high-throughput screen of a small molecule library for anti-coronavirus activity and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for hexachlorophene. |
| popPK | Druzhyna_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic screen for cystathionine β-synthase inhibition where hexachlorophene is a hit compound, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fang_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50) and does not report pharmacokinetic disposition parameters for hexachlorophene. |
| popPK | Fu_2022 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Gülden_2001 | irrelevant | 0 | 0 | The study is an in-vitro toxicological assay measuring effective concentrations (EC50) and cell binding ratios, not pharmacokinetic parameters (CL, V, t1/2) for hexachlorophene. |
| PD | Gülden_2001 | not_relevant | 3 | 2 | The paper reports in vitro EC50 ratios for hexachlorophene at different cell concentrations to illustrate binding effects, but it does not provide a pharmacodynamic model, dose-response curve, or numeric PD parameters (like Emax or slope) for the drug itself. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | The study investigates in-vitro enzyme inhibition (aromatase) and endocrine disruption, not pharmacokinetic disposition parameters. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | The paper is a mechanistic study on enzyme inhibition (SARS-CoV 3CL protease) and does not report pharmacokinetic disposition parameters for hexachlorophene. |
| popPK | Lokanatha_1999 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Marcinkeviciene_2001 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic kinetic study of FabI inhibition, not a pharmacokinetic study, and reports no disposition parameters for hexachlorophene. |
| popPK | Matsumura_1997 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Musdal_2013 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition assay (GST P1-1) and does not report pharmacokinetic disposition parameters for hexachlorophene. |
| popPK | Seibert_2002 | irrelevant | 0 | 0 | The study is an in-vitro investigation of protein binding and cytotoxic potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Seibert_2002 | not_relevant | 3 | 2 | The paper reports EC50 values and ratios for hexachlorophene in an in vitro assay to study protein binding effects, but it does not provide a dose-response curve, Emax, or a formal PK/PD model fitting the concentration-effect relationship. |
| popPK | Shuman_1975 | irrelevant | 0 | 0 | The paper describes neurotoxicity and age-dose-response in rats but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for hexachlorophene. |
| PD | Shuman_1975 | not_relevant | 2 | 0 | The text describes a qualitative age-dose-response relationship and susceptibility but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Spath_2026 | irrelevant | 0 | 0 | The study is a developmental neurotoxicity behavior assay in zebrafish, not a pharmacokinetic study, and hexachlorophene is only one of 12 test compounds without PK parameter reporting. |
| popPK | Whitelaw_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of hexachlorophene as a glutamate dehydrogenase inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wickramasinghe_2006 | irrelevant | 0 | 0 | This is an in vitro enzymology and structural study of Plasmodium falciparum FabG inhibition by hexachlorophene, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yuan_2019 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Zhai_2023 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Zhai_2023 | not_relevant | 0 | 0 | The paper focuses on the inhibition of 3β-hydroxysteroid dehydrogenase by pesticides and fungicides, with no mention of hexachlorophene or any pharmacodynamic modeling for it. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on enzyme inhibition kinetics (IC50, KD) and mechanistic toxicology, not pharmacokinetic disposition parameters (CL, V, t1/2) for hexachlorophene. |
| popPK | Zheng_2012 | irrelevant | 0 | 0 | The study is a pharmacological investigation of hexachlorophene's effect on KCNQ1 potassium channels (mechanistic/electrophysiological), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
