<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;azilsartan medoxomil&quot;}]"></div>

# azilsartan medoxomil

- **generic name:** azilsartan medoxomil
- **ATC codes:** `C09CA09`, `C09DA09`
- **DrugBank:** [DB08822](https://go.drugbank.com/drugs/DB08822) · **PubChem:** [CID 11238823](https://pubchem.ncbi.nlm.nih.gov/compound/11238823)
- **molar mass:** 568.5336 g/mol (C30H24N4O8) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Azilsartan medoxomil is a prodrug that is broken down to azilsartan, which belongs in the angiotensin-receptor blocking (ARB) drug class. It is a selective AT1 subtype angiotensin II receptor antagonist. Azilsartan medoxomil is a relatively recently-developed antihypertensive drug that was first approved by the FDA in February 2011.[A7354] Many guidelines recommend the use of ARBs as first-line therapy when initiating antihypertensive therapy and indicate that the clinical efficacy of ARBs is comparable to angiotensin-converting enzyme (ACE) inhibitors that are also used as first-line treatment for hypertension.[A232863]

Azilsartan medoxomil is marketed under the brand name Edarbi. It is used to treat hypertension as monotherapy or in combination with other antihypertensive drugs. It is also available in a combination product with [chlorthalidone]. As hypertension is a major risk factor for cardiovascular disease,[A7354] early management of hypertension has several implications on patients' survival rate and quality of life in the future. Lowering blood pressure is associated with a reduced risk of fatal and nonfatal cardiovascular events, primarily strokes and myocardial infarctions.[L32918] Azilsartan medoxomil is thus speculated to lower mortality rates and the onset of cardiovascular disease. Although there is no clinical significance yet determined, azilsartan medoxomil may have potential off-label uses in patients with a history of myocardial infarction or heart failure.[A232863]

**Indication.** Azilsartan medoxomil is indicated for the treatment of hypertension to lower blood pressure in patients over 18 years of age. It may be used either alone or in combination with other antihypertensive agents. Some antihypertensive drugs have lesser effects on blood pressure in black patients.[L32918]

Azilsartan medoxomil is available as a fixed-dose combination product with [chlorthalidone], which is indicated for the treatment of hypertension in patients whose hose blood pressure is not adequately controlled on monotherapy. It may be used as initial therapy if a patient is likely to need multiple drugs to achieve blood pressure goals.[L32923]

Azilsartan medoxomil belongs to the angiotensin-receptor blocking (ARB) class of drugs, which are used to decrease the progression of moderate-to-severe albuminuria and prevent the recurrence of atrial fibrillation as off-label uses in patients with diabetes mellitus and hypertension.[A232863]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 16:42 | 6:57 | 0/0/0 | 0/0/0 | 0/0/0 | 31,168/7,958 | openai / gpt-6-luna | 1 | 2/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=azilsartan_medoxomil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C8` substrate, `CYP2C9` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…approximately 55% of radioactivity was recovered in feces…”</sub> | prose |
| excretion | kidney | <sub>“…approximately 42% in urine…”</sub> | prose |

<sub>Actors without a tissue in the table: AGTR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kumar_2017.pdf` | Kumar Puttrevu S et al., Pharmacokinetic-pharmacodynamic modelin…, Naunyn-Schmiedeberg's archi… (2017) | popPK | 9 | [10.1007/s00210-017-1339-6](https://doi.org/10.1007/s00210-017-1339-6) | [28190245](https://pubmed.ncbi.nlm.nih.gov/28190245) | The paper models azilsartan medoxomil pharmacokinetics, but no numeric disposition parameter values are included in the evidence. |
| `Hjermitslev_2017.pdf` | Hjermitslev M et al., Azilsartan Medoxomil, an Angiotensin II…, Basic & clinical pharmacolo… (2017) | pd | 5 | [10.1111/bcpt.12800](https://doi.org/10.1111/bcpt.12800) | [28444983](https://www.ncbi.nlm.nih.gov/pubmed/28444983) | metadata signals extractable PD data (IC50) |
| `Tsai_2016.pdf` | Tsai MC et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.684](https://doi.org/10.1002/jcph.684) | [26632101](https://www.ncbi.nlm.nih.gov/pubmed/26632101) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-09-30T16:42:14.541438+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Majed_2020 | irrelevant | 0 | 0 | This is a review profile with no quantitative pharmacokinetic disposition parameters for azilsartan medoxomil. |
| PD | Al-Majed_2020 | not_relevant | 2 | 0 | A general drug profile/review mentions pharmacodynamics but reports no numeric dose- or exposure-response relationship or derivable PD parameters. |
| popPK | Angeloni_2016 | irrelevant | 1 | 0 | This is a review and provides no numeric azilsartan medoxomil disposition parameters. |
| PD | Angeloni_2016 | not_relevant | 2 | 0 | This is a qualitative review of antihypertensive efficacy; it reports no numeric dose- or exposure-response analysis or derivable PD parameters for azilsartan medoxomil. |
| popPK | Chae_2014 | irrelevant | 0 | 0 | The study models olmesartan medoxomil, not azilsartan medoxomil, and reports no numeric azilsartan parameters. |
| PD | Chae_2014 | not_relevant | 0 | 0 | The paper models pharmacokinetics of olmesartan medoxomil and hydrochlorothiazide, but reports no azilsartan medoxomil exposure-response or dose-response analysis or numeric PD parameters. |
| popPK | Hjermitslev_2017 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Kumar_2017 | relevant | 9 | 0 | The paper models azilsartan medoxomil pharmacokinetics, but no numeric disposition parameter values are included in the evidence. |
| PD | Kumar_2017 | not_relevant | 3 | 0 | The text describes an indirect-response PK/PD model and dose-level simulations, but provides no numeric PD parameters or effect-versus-concentration data to extract or derive. |
| popPK | Li_2020 | irrelevant | 1 | 0 | The study reports AZL (azilsartan) parameters, not azilsartan medoxomil parameters. |
| popPK | Song_2016 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Song_2016 | not_relevant | 0 | 0 | The paper concerns olmesartan medoxomil, not azilsartan medoxomil. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies candesartan cilexetil, not azilsartan medoxomil, and reports no azilsartan PK parameter values. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper studies candesartan cilexetil, not azilsartan medoxomil, and reports no PD relationship for azilsartan medoxomil. |
| popPK | Tsai_2016 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Webb_2016 | relevant | 10 | 2 | This is an original azilsartan-medoxomil PK study, but the study’s parameter estimates are referred to in supplementary tables not provided here. |
| PD | Webb_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetics, dosing simulations, and safety, but no blood-pressure or other pharmacodynamic exposure- or dose-response analysis. |
| popPK | Zaiken_2011 | irrelevant | 1 | 0 | This is a review and provides no quantitative disposition parameters for azilsartan medoxomil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
