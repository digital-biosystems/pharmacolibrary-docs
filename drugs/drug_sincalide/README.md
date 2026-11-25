<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;sincalide&quot;}]"></div>

# sincalide

- **generic name:** sincalide
- **ATC codes:** `V04CC03`
- **DrugBank:** [DB09142](https://go.drugbank.com/drugs/DB09142) · **PubChem:** [CID 9833444](https://pubchem.ncbi.nlm.nih.gov/compound/9833444)
- **groups:** approved

## About

Sincalide is a cholecystokinetic agent used to diagnose disorders of the gallbladder and pancreas. It is given as an intravenous injection. It is an approved diagnostic agent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7521885](https://www.wikidata.org/wiki/Q7521885), [Wikipedia](https://en.wikipedia.org/wiki/Sincalide?oldid=1332221625) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Taghizadeh_2022_IP1](drugs/drug_sincalide/pd_Taghizadeh_2022_IP1.md) | IP1 production (fold difference over baseline) ← CCK-8 (sincalide) · direct Emax (saturable) effect | — | Taghizadeh MS et al., Discovery of the cyclotide caripe 11 as…, Scientific reports (2022) | [10.1038/s41598-022-13142-z](https://doi.org/10.1038/s41598-022-13142-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:45 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,890/157 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 92 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_2022 | irrelevant | 0 | 0 | The paper investigates phytocannabinoids in gingival fibroblasts and does not study sincalide or report any pharmacokinetic parameters for it. |
| PGx | Abidi_2022 | not_relevant | 0 | 0 | The paper studies phytocannabinoids in gingival fibroblasts and does not mention sincalide or any pharmacogenomic effects. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and mechanism of action of coptisine in rats, not the pharmacokinetics of sincalide. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper studies Coptisine (CTS) and does not mention Sincalide or any pharmacogenomic effects. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of hydroxyurea and eflornithine against Babesia/Theileria; "CLF" is clofazimine, not sincalide, and no PK parameters for sincalide appear. |
| popPK | Franco_2023 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of chloroquine and trastuzumab in breast cancer cells, not the pharmacokinetics of sincalide. |
| PGx | Franco_2023 | not_relevant | 0 | 0 | The paper reports on pharmacodynamic interactions between chloroquine and trastuzumab, not pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sincalide. |
| popPK | Hirsh_1998 | irrelevant | 0 | 0 | The paper studies the mechanism of cholecystokinin (CCK-8) on glucose absorption in rats, not the pharmacokinetics of sincalide. |
| PGx | Hirsh_1998 | not_relevant | 0 | 0 | The paper studies the effect of cholecystokinin (CCK) on intestinal glucose absorption, not the pharmacokinetics or pharmacodynamics of sincalide, and contains no pharmacogenomic analysis. |
| popPK | Lv_2024 | irrelevant | 0 | 0 | Network pharmacology study of Astragalus in Alzheimer's disease; no sincalide PK parameters reported anywhere. |
| popPK | Peng_2022 | irrelevant | 0 | 0 | This is an in vitro antioxidant/antitumor study of Camellia fascicularis leaf extracts; no sincalide PK parameters appear anywhere. |
| popPK | Roche_1989 | irrelevant | 0 | 0 | The paper describes in vitro cell signaling mechanisms involving gastrin and CCK-8, and does not involve the drug sincalide or any pharmacokinetic analysis. |
| PGx | Roche_1989 | not_relevant | 0 | 0 | The paper studies signal transduction in rabbit parietal cells and does not involve sincalide or any pharmacogenomic analysis. |
| popPK | Taghizadeh_2022 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study of cyclotide peptides at the CCK2 receptor with no sincalide PK or disposition parameters. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zidovudine (AZT), not sincalide. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of zidovudine, not sincalide. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper studies the pharmacology of the Menin inhibitor MI-503, not sincalide. |
| PGx | Tian_2025 | not_relevant | 0 | 0 | The paper investigates the anti-cancer activity of the Menin inhibitor MI-503 in osteosarcoma and does not mention the drug sincalide. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The study focuses on the electrochemical degradation of the mycotoxin zearalenone and its toxicity, not the pharmacokinetics of the drug sincalide. |
| PGx | Yu_2023 | not_relevant | 0 | 0 | The paper concerns the electrochemical degradation and toxicity of the mycotoxin zearalenone, not the pharmacokinetics or pharmacodynamics of the drug sincalide. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper is a mechanistic study of the enzyme PGK1 in rheumatoid arthritis and contains no pharmacokinetic data for sincalide. |
| PGx | Zhao_2016 | not_relevant | 0 | 0 | The paper investigates PGK1 in rheumatoid arthritis and does not mention sincalide or any pharmacokinetic/pharmacodynamic parameters of a drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsincalide%5D&body=Drug%3A%20sincalide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sincalide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
