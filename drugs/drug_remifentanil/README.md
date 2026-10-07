<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;remifentanil&quot;}]"></div>

# remifentanil

- **generic name:** remifentanil
- **ATC codes:** `N01AH06`
- **DrugBank:** [DB00899](https://go.drugbank.com/drugs/DB00899) · **PubChem:** [CID 60815](https://pubchem.ncbi.nlm.nih.gov/compound/60815)
- **molar mass:** 376.4467 g/mol (C20H28N2O5) — DrugBank
- **groups:** approved, investigational

## About

Remifentanil is a potent opioid painkiller used as part of general anaesthesia to control pain during surgery. It is an approved medicine given intravenously, mainly in hospital settings such as operating theatres, because it acts very quickly and briefly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417902](https://www.wikidata.org/wiki/Q417902) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| remifentanil | parent | 376.447 | C20H28N2O5 | DrugBank | [60815](https://pubchem.ncbi.nlm.nih.gov/compound/60815) | Maharaj_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:31 | 2:33 | 0/2/1 | 2/0/0 | 0/0/0 | 311,867/14,851 | einfracz / qwen3.8-27b | 17 | 2/7 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Maharaj_2025_reference](drugs/drug_remifentanil/Remifentanil_Maharaj2025_reference.md) | — | 1-compartment (no model) | 2 | Maharaj AR et al., Opioid use in treated and untreated obs…, British journal of anaesthe… (2025) | [10.1016/j.bja.2024.10.042](https://doi.org/10.1016/j.bja.2024.10.042) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cascone_2013_reference](drugs/drug_remifentanil/Remifentanil_Cascone2013_reference.md) | — | 2-compartment (no model) | 3 | Cascone S et al., Pharmacokinetics of Remifentanil: a thr…, Translational medicine @ Un… (2013) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Iwata_2025_reference](drugs/drug_remifentanil/Remifentanil_Iwata2025_reference.md) | — | 1-compartment (no model) | 0 | Iwata H et al., Machine Learning Prediction and Validat…, Molecular pharmaceutics (2025) | [10.1021/acs.molpharmaceut.4c01431](https://doi.org/10.1021/acs.molpharmaceut.4c01431) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eleveld_2017_SEF](drugs/drug_remifentanil/pd_Eleveld_2017_SEF.md) | spectral-edge frequency ← remifentanil · delayed effect through an effect compartment | — | Eleveld DJ et al., An Allometric Model of Remifentanil Pha…, Anesthesiology (2017) | [10.1097/ALN.0000000000001634](https://doi.org/10.1097/ALN.0000000000001634) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vide_2020_PPI](drugs/drug_remifentanil/pd_Vide_2020_PPI.md) | Pupillary Pain Index ← remifentanil · direct sigmoid Emax (Hill) effect | — | Vide S et al., Pharmacodynamic modelling of the effect…, Journal of clinical monitor… (2020) | [10.1007/s10877-019-00323-x](https://doi.org/10.1007/s10877-019-00323-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=remifentanil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 247 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eleveld_2017.pdf` | Eleveld DJ et al., An Allometric Model of Remifentanil Pha…, Anesthesiology (2017) | popPK | 10 | [10.1097/ALN.0000000000001634](https://doi.org/10.1097/ALN.0000000000001634) | [28509794](https://pubmed.ncbi.nlm.nih.gov/28509794) | The paper reports specific quantitative population PK parameter estimates (V1, V2, V3, CL, Q2, Q3) for remifentanil derived from a compartmental model. |
| `Egan_1995_2.pdf` | Egan TD, Remifentanil pharmacokinetics and pharm…, Clinical pharmacokinetics (1995) | popPK | 6 | [10.2165/00003088-199529020-00003](https://doi.org/10.2165/00003088-199529020-00003) | [7586903](https://pubmed.ncbi.nlm.nih.gov/7586903) | The abstract provides approximate quantitative PK parameters (clearance ~180 L/h, Vss ~30 L) and context-sensitive half-time for remifentanil in humans, but these are likely from simulation/appraisal rather than a new primary dataset. |

<sub>queue written 2026-10-07T04:29:45.153515+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2010 | irrelevant | 3 | 2 | This is a review discussing TCI pump limitations, providing an allometric scaling example for remifentanil clearance rather than a study of quantitative PK parameters from original data. |
| popPK | Braathen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, with remifentanil mentioned only as a concomitant analgesic. |
| popPK | Cascone_2013 | relevant | 9 | 0 | The study develops a three-compartment pharmacokinetic model for remifentanil and refers to optimized parameter values in Table 1, but the actual numeric values are not present in the provided text. |
| popPK | Jonkman_2018 | irrelevant | 1 | 0 | This is a pharmacodynamic study of esketamine where remifentanil is used as a tool to induce respiratory depression, and no quantitative remifentanil disposition parameters are reported. |
| popPK | Lemmens_1995 | irrelevant | 1 | 0 | The text is a general review discussing pharmacokinetic concepts and remifentanil's metabolism qualitatively, without reporting any quantitative pharmacokinetic parameter values for remifentanil. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norepinephrine, not remifentanil (which was only a co-administered anesthetic). |
| popPK | Lötsch_2005_2 | irrelevant | 3 | 2 | This is a review of PK/PD modeling principles and summarizes parameters (t1/2ke0) for remifentanil in Table 1, but it does not report the quantitative disposition parameters (CL, V, Q) required for population PK extraction. |
| popPK | Minto_1997 | irrelevant | 2 | 0 | The paper reports simulation results and qualitative descriptions of parameter changes by age, but does not list the specific numeric population PK parameter values (e.g., mean CL, V1) in the provided evidence. |
| popPK | Tu_2026 | irrelevant | 2 | 0 | The study focuses on optimizing existing PK/PD models (Schnider, Minto, etc.) for BIS prediction rather than reporting new quantitative disposition parameter estimates for remifentanil, and no specific parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Tulbah_2026 | irrelevant | 3 | 0 | The paper is a narrative review of anesthesia PKPD models; while it discusses remifentanil models, it does not present new quantitative population PK parameter estimates (values are described qualitatively or referenced to original studies/figures). |
| popPK | Ueshima_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remimazolam (RMZ), not remifentanil, which is only mentioned as a concomitant medication administered later or in prior studies. |
| popPK | Vandemoortele_2022 | irrelevant | 2 | 0 | This is a narrative review that discusses PKPD models but does not report the specific quantitative disposition parameter values (e.g., base clearance or volume numbers) for remifentanil in the provided text. |
| popPK | Vellinga_2025 | irrelevant | 1 | 0 | The study characterizes the drug-drug interaction of remifentanil on the pharmacokinetics of remimazolam, using an existing model for remifentanil rather than deriving new population pharmacokinetic parameters for remifentanil itself. |
| popPK | Vide_2020 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (effect-site concentrations, PPI) for pain suppression, not pharmacokinetic disposition parameters (CL, V, ka). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:29 UTC</sub>
