<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trastuzumab

- **generic name:** trastuzumab
- **ATC codes:** `L01FD01`, `L01FY01`, `L01XC03`
- **DrugBank:** [DB00072](https://go.drugbank.com/drugs/DB00072) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Trastuzumab is a monoclonal antibody used to treat HER2-positive cancers, mainly breast cancer and gastric cancer. It is widely used and authorised in the European Union, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412616](https://www.wikidata.org/wiki/Q412616) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| MMAE | metabolite | 717.993 | C39H67N5O7 | PubChem | [11542188](https://pubchem.ncbi.nlm.nih.gov/compound/11542188) | Singh_2019 |
| rezetecan | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:33 | 12:50 | 1/2/2 | 1/0/0 | 0/0/0 | 256,759/26,380 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Verma_2025_rat](drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md) | ▶ model + simulator | 2-compartment, oral | 6 | Verma A et al., Oral Bioavailability of Monoclonal Anti…, Pharmaceutics (2025) | [10.3390/pharmaceutics18010022](https://doi.org/10.3390/pharmaceutics18010022) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67, Q64 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Gao_2026_reference](drugs/drug_trastuzumab/Trastuzumab_Gao2026_reference.md) | — | parent + metabolite (no model) | 9 | Gao X et al., Population Pharmacokinetics of Trastuzu…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70259](https://doi.org/10.1002/psp4.70259) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q30, Q63, Q64, Q49 — no SI val…</sub><br><sub>route_to: `human_review`</sub> | [Verma_2025_mouse](drugs/drug_trastuzumab/Trastuzumab_Verma2025_mouse.md) | — | 2-compartment (no model) | 6 | Verma A et al., Oral Bioavailability of Monoclonal Anti…, Pharmaceutics (2025) | [10.3390/pharmaceutics18010022](https://doi.org/10.3390/pharmaceutics18010022) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chang_2024_reference](drugs/drug_trastuzumab/Trastuzumab_Chang2024_reference.md) | — | 1-compartment (no model) | 0 | Chang HP et al., PK/PD Evaluation of Antibody-Drug Conju…, The AAPS journal (2024) | [10.1208/s12248-024-00998-4](https://doi.org/10.1208/s12248-024-00998-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Singh_2019_reference](drugs/drug_trastuzumab/Trastuzumab_Singh2019_reference.md) | — | parent + metabolite (no model) | 1 | Singh AP et al., A Cell-Level Systems PK-PD Model to Cha…, Pharmaceutics (2019) | [10.3390/pharmaceutics11020098](https://doi.org/10.3390/pharmaceutics11020098) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2011_LVEF](drugs/drug_trastuzumab/pd_van_2011_LVEF.md) | left ventricular ejection fraction ← trastuzumab · delayed effect through an effect compartment | — | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (2011) | [10.1038/clpt.2011.74](https://doi.org/10.1038/clpt.2011.74) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trastuzumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ERBB2 (antibody), ERBB2 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 20 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Petitcollin_2021.pdf` | Petitcollin A et al., Population pharmacokinetics and exposur…, European journal of clinica… (2021) | popPK | 10 | [10.1007/s00228-021-03179-w](https://doi.org/10.1007/s00228-021-03179-w) | [34245336](https://pubmed.ncbi.nlm.nih.gov/34245336) | The paper reports a population PK model for trastuzumab with qualitative parameter descriptions (e.g., half-life ~14 days), but specific numeric values for clearance, volume, and intercompartmental clearance are not provided in the evidence text. |
| `Bae_2019.pdf` | Bae DJ et al., Whole-Body Physiologically Based Pharma…, Journal of pharmaceutical s… (2019) | popPK | 9 | [10.1016/j.xphs.2019.01.024](https://doi.org/10.1016/j.xphs.2019.01.024) | [30716331](https://pubmed.ncbi.nlm.nih.gov/30716331) | The study reports a PBPK model for trastuzumab in mice and predicts human PK, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, only simulation ratios. |
| `van_2011.pdf` | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (2011) | popPK | 8 | [10.1038/clpt.2011.74](https://doi.org/10.1038/clpt.2011.74) | [21633346](https://pubmed.ncbi.nlm.nih.gov/21633346) | The study reports a population PK-PD model for trastuzumab, but the evidence only provides the LVEF recovery half-life (49.7 days) and EC50 changes, lacking specific quantitative PK parameters like clearance (CL) or volume (V) for the drug itself. |

<sub>queue written 2026-10-07T21:22:51.163705+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bae_2019 | relevant | 9 | 2 | The study reports a PBPK model for trastuzumab in mice and predicts human PK, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, only simulation ratios. |
| popPK | Bloch_2025 | irrelevant | 0 | 0 | The paper describes the engineering and in vitro functional characterization (binding/ADCC) of masked trastuzumab constructs, but does not report any pharmacokinetic parameters (CL, V, t1/2) for trastuzumab. |
| popPK | Chang_2024 | irrelevant | 2 | 2 | The study reports PK parameters for Fc-engineered trastuzumab variants in mice (preclinical), not for the standard drug in humans, and the values are for variants rather than the reference drug. |
| popPK | Cherifi_2024 | irrelevant | 1 | 0 | This is a review of antibody-drug conjugates (ADCs) containing trastuzumab, not a study of trastuzumab itself, and it lacks specific quantitative PK parameter values. |
| popPK | Davies_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacology of AZD5363, with trastuzumab serving only as a comparator agent in combination studies. |
| popPK | Hedrich_2018 | irrelevant | 1 | 0 | This is a review article discussing antibody-drug conjugates (including trastuzumab emtansine) without providing original quantitative PK parameter values for trastuzumab itself. |
| popPK | Lassen_2024 | irrelevant | 0 | 0 | The study reports echocardiographic cardiac function parameters (left atrial strain), not pharmacokinetic disposition parameters for trastuzumab. |
| popPK | Petitcollin_2021 | relevant | 10 | 2 | The paper reports a population PK model for trastuzumab with qualitative parameter descriptions (e.g., half-life ~14 days), but specific numeric values for clearance, volume, and intercompartmental clearance are not provided in the evidence text. |
| popPK | Rajwade_2025 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the AAV vector and transgene expression dynamics (dose-response) rather than the disposition parameters (CL, V, t1/2) of the trastuzumab protein itself. |
| popPK | Sapra_2013 | irrelevant | 0 | 0 | The paper is a review discussing antibody-drug conjugates (specifically T-DM1) and does not report original quantitative PK parameters for the parent drug trastuzumab. |
| popPK | Sukumaran_2015 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of THIOMAB drug conjugates (antibody-drug conjugates) in mice, not the parent drug trastuzumab, and no numeric parameter values are provided in the evidence. |
| popPK | Yin_2021 | irrelevant | 0 | 0 | The study reports population PK parameters for the antibody-drug conjugate trastuzumab deruxtecan (T-DXd), not the monoclonal antibody trastuzumab itself. |
| popPK | Yin_2021_2 | irrelevant | 0 | 0 | The study focuses on Trastuzumab Deruxtecan (T-DXd), an antibody-drug conjugate, rather than the parent drug Trastuzumab, and does not report specific PK parameters for Trastuzumab alone. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tucatinib, not trastuzumab, which is only mentioned as a co-administered drug. |
| popPK | van_2011 | relevant | 8 | 2 | The study reports a population PK-PD model for trastuzumab, but the evidence only provides the LVEF recovery half-life (49.7 days) and EC50 changes, lacking specific quantitative PK parameters like clearance (CL) or volume (V) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:23 UTC</sub>
