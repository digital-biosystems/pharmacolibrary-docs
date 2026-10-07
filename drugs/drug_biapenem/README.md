<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;biapenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Biapenem_Akashita2015_reference&quot;,&quot;label&quot;:&quot;Akashita_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Akashita2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Biapenem_Chen2024v2_reference&quot;,&quot;label&quot;:&quot;Chen_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Chen2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Biapenem_Fu2024_reference&quot;,&quot;label&quot;:&quot;Fu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_biapenem/Biapenem_Fu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# biapenem

- **generic name:** biapenem
- **ATC codes:** `J01DH05`
- **DrugBank:** [DB13028](https://go.drugbank.com/drugs/DB13028) · **PubChem:** [CID 71339](https://pubchem.ncbi.nlm.nih.gov/compound/71339)
- **molar mass:** 350.39 g/mol (C15H18N4O4S) — DrugBank
- **groups:** investigational

## About

Biapenem is a carbapenem antibiotic (a beta-lactam antibacterial) with bactericidal, anti-infective activity, investigated for treating bacterial infections. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4902548](https://www.wikidata.org/wiki/Q4902548) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| biapenem | parent | 350.39 | C15H18N4O4S | DrugBank | [71339](https://pubchem.ncbi.nlm.nih.gov/compound/71339) | Akashita_2015, Chen_2024, Dong_2016, Ikawa_2008, Ikawa_2008_3, Kozawa_1998, Nakashima_1993, Rao_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:30 | 9:40 | 3/3/4 | 0/0/0 | 0/0/0 | 361,137/18,454 | einfracz / qwen3.8-27b | 12 | 0/6 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akashita_2015_reference](drugs/drug_biapenem/Biapenem_Akashita2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Akashita G et al., PK/PD analysis of biapenem in patients…, Journal of pharmaceutical h… (2015) | [10.1186/s40780-015-0031-6](https://doi.org/10.1186/s40780-015-0031-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2024_2_reference](drugs/drug_biapenem/Biapenem_Chen2024v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chen X et al., The effect of zopiclone co-administrati…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1470865](https://doi.org/10.3389/fphar.2024.1470865) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Fu_2024_reference](drugs/drug_biapenem/Biapenem_Fu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fu G et al., An insight into pharmacokinetics and do…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1396994](https://doi.org/10.3389/fphar.2024.1396994) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2024_reference](drugs/drug_biapenem/Biapenem_Chen2024_reference.md) | — | 1-compartment (no model) | 2 | Chen D et al., Population pharmacokinetics, dosing opt…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1388150](https://doi.org/10.3389/fphar.2024.1388150) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Dong_2016_reference](drugs/drug_biapenem/Biapenem_Dong2016_reference.md) | — | 2-compartment (no model) | 4 | Dong J et al., Optimal dosing regimen of biapenem in C…, International journal of an… (2016) | [10.1016/j.ijantimicag.2015.12.018](https://doi.org/10.1016/j.ijantimicag.2015.12.018) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ikawa_2008_reference](drugs/drug_biapenem/Biapenem_Ikawa2008_reference.md) | — | 2-compartment (no model) | 6 | Ikawa K et al., Pharmacodynamic evaluation of biapenem…, International journal of an… (2008) | [10.1016/j.ijantimicag.2008.03.011](https://doi.org/10.1016/j.ijantimicag.2008.03.011) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Rao_2023_reference](drugs/drug_biapenem/Biapenem_Rao2023_reference.md) | — | 1-compartment (no model) | 2 | Rao Q et al., Optimal dosing regimen of biapenem base…, International journal of an… (2023) | [10.1016/j.ijantimicag.2023.106841](https://doi.org/10.1016/j.ijantimicag.2023.106841) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ikawa_2008_3_reference](drugs/drug_biapenem/Biapenem_Ikawa2008v3_reference.md) | — | 1-compartment (no model) | 4 | Ikawa K et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2008) | [10.1111/j.1365-2710.2008.00908.x](https://doi.org/10.1111/j.1365-2710.2008.00908.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kozawa_1998_reference](drugs/drug_biapenem/Biapenem_Kozawa1998_reference.md) | — | 1-compartment (no model) | 2 | Kozawa O et al., Pharmacokinetics and safety of a new pa…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.6.1433](https://doi.org/10.1128/AAC.42.6.1433) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nakashima_1993_reference](drugs/drug_biapenem/Biapenem_Nakashima1993_reference.md) | — | 1-compartment (no model) | 2 | Nakashima M et al., Phase 1 study of L-627, biapenem, a new…, International journal of cl… (1993) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 62 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 10  ·  extracted 3  ·  needs_review 4  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dong_2016.pdf` | Dong J et al., Optimal dosing regimen of biapenem in C…, International journal of an… (2016) | popPK | 10 | [10.1016/j.ijantimicag.2015.12.018](https://doi.org/10.1016/j.ijantimicag.2015.12.018) | [26895604](https://pubmed.ncbi.nlm.nih.gov/26895604) | The evidence explicitly reports the final population pharmacokinetic model parameters (CL, Vc, Q, Vp) for biapenem in humans. |
| `Ikawa_2008.pdf` | Ikawa K et al., Pharmacodynamic evaluation of biapenem…, International journal of an… (2008) | popPK | 10 | [10.1016/j.ijantimicag.2008.03.011](https://doi.org/10.1016/j.ijantimicag.2008.03.011) | [18602798](https://pubmed.ncbi.nlm.nih.gov/18602798) | The abstract provides explicit numeric values for the population pharmacokinetic model parameters (CL, V1, Q2, V2, Q3, V3) for biapenem in humans. |
| `Ikawa_2008_3.pdf` | Ikawa K et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2008) | popPK | 10 | [10.1111/j.1365-2710.2008.00908.x](https://doi.org/10.1111/j.1365-2710.2008.00908.x) | [18315787](https://pubmed.ncbi.nlm.nih.gov/18315787) | The evidence contains a population PK model for biapenem in humans with explicit numerical values for clearance, volume, and intercompartmental clearance. |
| `Koeppe_1997.pdf` | Koeppe P et al., Biapenem pharmacokinetics in healthy vo…, Arzneimittel-Forschung (1997) | popPK | 10 | not captured | [9428983](https://pubmed.ncbi.nlm.nih.gov/9428983) | The abstract describes a relevant pharmacokinetic study of biapenem in humans but does not provide any specific numeric values for CL, V, or other parameters in the text provided. |
| `Kozawa_1998.pdf` | Kozawa O et al., Pharmacokinetics and safety of a new pa…, Antimicrobial agents and ch… (1998) | popPK | 10 | [10.1128/AAC.42.6.1433](https://doi.org/10.1128/AAC.42.6.1433) | [9624490](https://pubmed.ncbi.nlm.nih.gov/9624490) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, volume of distribution trends) for biapenem in humans, with specific numeric values provided in the abstract text. |
| `Rao_2023.pdf` | Rao Q et al., Optimal dosing regimen of biapenem base…, International journal of an… (2023) | popPK | 10 | [10.1016/j.ijantimicag.2023.106841](https://doi.org/10.1016/j.ijantimicag.2023.106841) | [37160241](https://pubmed.ncbi.nlm.nih.gov/37160241) | The evidence provides explicit quantitative population PK parameter formulas for biapenem (CL and V) including specific numeric coefficients and base values. |
| `Dong_2016_2.pdf` | Dong J et al., Efficacy and safety of biapenem against…, Journal of chemotherapy (Fl… (2016) | popPK | 9 | [10.1179/1973947815Y.0000000078](https://doi.org/10.1179/1973947815Y.0000000078) | [26430768](https://pubmed.ncbi.nlm.nih.gov/26430768) | The study is a PK/PD analysis of biapenem in humans, but the provided evidence only contains efficacy outcomes and simulation inputs, lacking the specific quantitative PK parameter estimates (e.g., CL, V) required for extraction. |
| `Nakashima_1993.pdf` | Nakashima M et al., Phase 1 study of L-627, biapenem, a new…, International journal of cl… (1993) | popPK | 9 | not captured | [8458679](https://pubmed.ncbi.nlm.nih.gov/8458679) | The study reports quantitative PK parameters (t1/2, renal recovery) and a model fit, but lacks explicit values for CL, V, and Q. |
| `Ikawa_2011.pdf` | Ikawa K et al., Clinical pharmacokinetics of meropenem…, Antimicrobial agents and ch… (2011) | popPK | 8 | [10.1128/aac.00497-11](https://doi.org/10.1128/aac.00497-11) | [21947393](https://pubmed.ncbi.nlm.nih.gov/21947393) | Study reports clinical PK/PD of biapenem with some quantitative values (bile/plasma ratios, MIC breakpoints), but specific disposition parameters (CL, V) are likely in tables not fully detailed in the abstract snippet. |
| `Ikawa_2008_2.pdf` | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, Chemotherapy (2008) | popPK | 5 | [10.1159/000152459](https://doi.org/10.1159/000152459) | [18769027](https://pubmed.ncbi.nlm.nih.gov/18769027) | The study is a population PK study of biapenem in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence, only the model structure and covariates are described. |
| `Karino_2013.pdf` | Karino F et al., Evaluation of the efficacy and safety o…, Journal of infection and ch… (2013) | popPK | 5 | [10.1007/s10156-012-0463-y](https://doi.org/10.1007/s10156-012-0463-y) | [22926665](https://pubmed.ncbi.nlm.nih.gov/22926665) | The study mentions pharmacokinetics and low trough values but does not provide specific numeric PK parameters (CL, V, ka, etc.) in the provided evidence. |

<sub>queue written 2026-10-07T10:25:43.427156+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024_2 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of sertraline (an SSRI), not biapenem. |
| popPK | Dong_2016_2 | relevant | 9 | 1 | The study is a PK/PD analysis of biapenem in humans, but the provided evidence only contains efficacy outcomes and simulation inputs, lacking the specific quantitative PK parameter estimates (e.g., CL, V) required for extraction. |
| popPK | Fu_2024 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics in the elderly for various antimicrobials but does not contain any data or mention of biapenem. |
| popPK | Gulyás_2025 | irrelevant | 0 | 0 | The paper describes in vitro synthesis and mechanistic studies of metallo-β-lactamase inhibitors, not the pharmacokinetics of biapenem. |
| popPK | Hang_2018 | irrelevant | 1 | 0 | The study is a simulation using "previously published pharmacokinetic data" and does not report original quantitative PK parameter values (CL, V, etc.) for biapenem in the text. |
| popPK | Ikawa_2008_2 | relevant | 5 | 2 | The study is a population PK study of biapenem in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence, only the model structure and covariates are described. |
| popPK | Ikawa_2011 | relevant | 8 | 4 | Study reports clinical PK/PD of biapenem with some quantitative values (bile/plasma ratios, MIC breakpoints), but specific disposition parameters (CL, V) are likely in tables not fully detailed in the abstract snippet. |
| popPK | Karino_2013 | irrelevant | 5 | 0 | The study mentions pharmacokinetics and low trough values but does not provide specific numeric PK parameters (CL, V, ka, etc.) in the provided evidence. |
| popPK | Koeppe_1997 | relevant | 10 | 0 | The abstract describes a relevant pharmacokinetic study of biapenem in humans but does not provide any specific numeric values for CL, V, or other parameters in the text provided. |
| PGx | Koeppe_1997 | not_relevant | 0 | 0 | The paper reports the effect of renal impairment and haemodialysis on biapenem pharmacokinetics, not the effect of genetic variants. |
| PGx | Nasomsong_2024 | not_relevant | 0 | 0 | The paper investigates the in vitro activity of biapenem against bacterial genotypes (NDM/OXA-48) and uses Monte Carlo simulations for dosing, but does not report any pharmacogenomic effects of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Niki_2009 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility (MIC) and clinical break point coverage, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for biapenem. |
| PGx | Okanda_2026_2 | not_relevant | 0 | 0 | The study is purely in vitro pharmacology involving bacterial isolates and contains no human genetic data or pharmacogenomic analysis. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The study reports the effect of CYP2C9 genotype on Valproic Acid pharmacokinetics, not Biapenem. |
| popPK | Yadav_2015 | irrelevant | 0 | 0 | The study focuses on in vitro antibacterial synergy of imipenem (not biapenem) and does not report pharmacokinetic parameters for biapenem. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:26 UTC</sub>
