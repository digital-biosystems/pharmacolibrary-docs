<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clozapine_Reeves2024_reference&quot;,&quot;label&quot;:&quot;Reeves_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Reeves2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# clozapine

- **generic name:** clozapine
- **ATC codes:** `N05AH02`
- **DrugBank:** [DB00363](https://go.drugbank.com/drugs/DB00363)
- **groups:** approved, investigational

## About

**Description.** Clozapine is a tricyclic dibenzodiazepine, classified as an atypical antipsychotic agent.[A256708] Clozapine displays affinity to various neuroreceptors with a particularly low affinity to the dopamine receptors, thus breaking the mold of first-generation antipsychotics and deeming it "atypical".[A256723]. This low affinity to dopamine receptors results in fewer extrapyramidal side effects, especially tardive dyskinesia.[A185747] However, its promiscuity toward the muscarinic and adrenergic receptors can result in other side effects, notably gastrointestinal hypomotility and orthostatic hypotension. [L905,A215552]. Despite its effectiveness in treating both positive and negative symptoms of schizophrenia, clozapine was briefly removed from the market in various jurisdictions in 1970 due to severe agranulocytosis.[A256713,A256718] However, continued evidence of its effectiveness led to clozapine's eventual reintroduction, although with a reluctance to prescribe it.[A256718] 

Clozapine was approved by the FDA in 1989 for treatment-resistant schizophrenia under the brand CLOZARIL.[L905] Due to its severe adverse effects profile, clozapine is only available through a restricted program under a Risk Evaluation Mitigation Strategy (REMS) called the Clozapine REMS Program.[L905]

**Indication.** Clozapine is indicated for the treatment of severely ill patients with schizophrenia who fail to respond adequately to standard antipsychotic treatment. Because of the risks of severe neutropenia and of seizure associated with its use, Clozapine should be used only in patients who have failed to respond adequately to standard antipsychotic treatment.[L905]

Clozapine is also indicated for reducing the risk of recurrent suicidal behavior in patients with schizophrenia or schizoaffective disorder who are judged to be at chronic risk for re-experiencing suicidal behavior, based on history and recent clinical state. Suicidal behavior refers to actions by a patient that put him/herself at risk for death.[L905]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 3/0 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Geers_2022_reference](drugs/drug_clozapine/Clozapine_Geers2022_reference.md) | Geers LM et al., Population pharmacokinetic model and li…, Therapeutic advances in psy… (2022) | [10.1177/20451253211065857](https://doi.org/10.1177/20451253211065857) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Reeves_2024_reference](drugs/drug_clozapine/Clozapine_Reeves2024_reference.md) | Reeves S et al., A population pharmacokinetic model to g…, British journal of clinical… (2024) | [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clozapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | bile duct | <sub>“…ace amounts of unchanged drug are detected in the urine and feces. Clozapine is a substrat…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…nd only trace amounts of unchanged drug are detected in the urine and feces. Clozapine is…”</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `FMO3` substrate, `GSTP1` unknown, `SLC22A1` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `GSTP1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…e administered dose is excreted in the urine and 30% in the feces.[L905]…”</sub> | prose |
| excretion | kidney | `SLC22A2` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CALY (unknown), CHRM1 (partial agonist), CHRM2 (partial agonist), CHRM3 (target), CHRM4 (partial agonist), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (binder), GABBR1 (positive modulator), GABBR2 (positive modulator), GABRA1 (target), GABRB1 (target), GABRG1 (target), HRH1 (target), HRH4 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR2A (target), HTR2C (target), HTR3A (target), HTR6 (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 143 matched, 40 returned
- **screened:** 2  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Albitar_2020.pdf` | Albitar O et al., Population Pharmacokinetics of Clozapin…, BioMed research internation… (2020) | popPK | 8 | [10.1155/2020/9872936](https://doi.org/10.1155/2020/9872936) | [31998804](https://pubmed.ncbi.nlm.nih.gov/31998804) | The paper is a systematic review that explicitly extracts and summarizes quantitative population pharmacokinetic parameters (CL, Vd, ka, and IIV) for clozapine from multiple primary studies. |
| `Reith_1998.pdf` | Reith D et al., Features and toxicokinetics of clozapin…, Therapeutic drug monitoring (1998) | popPK | 8 | [10.1097/00007691-199802000-00017](https://doi.org/10.1097/00007691-199802000-00017) | [9485562](https://pubmed.ncbi.nlm.nih.gov/9485562) | The paper explicitly reports quantitative compartmental pharmacokinetic parameters for clozapine, including clearance, volumes of distribution, and half-lives derived from toxicokinetic modeling. |

<sub>queue written 2026-07-18T02:11:11.830034+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Per_2025 | irrelevant | not captured | not captured | The study investigates metformin's impact on clozapine-induced weight gain and reports no pharmacokinetic parameters or modeling for clozapine. |
| popPK | Piras_2023 | irrelevant | 2 | 0 | This is a metabolic dose–weight study, not a PK study, and no clozapine disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:19 UTC</sub>
