<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;vestronidase alfa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VestronidaseAlfa_Qi2019_reference&quot;,&quot;label&quot;:&quot;Qi_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# vestronidase alfa

- **generic name:** vestronidase alfa
- **ATC codes:** `A16AB18`
- **DrugBank:** [DB12366](https://go.drugbank.com/drugs/DB12366) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Vestronidase alfa, or vestronidase alfa-vjbk, is a recombinant human lysosomal beta glucuronidase that is a purified enzyme produced by recombinant DNA technology in a Chinese hamster ovary cell line. The enzyme is a homotetramer consisted of 4 monomers with 629 amino acids, and holds the same amino acid sequence as human beta-glucuronidase (GUS) [FDA Label]. Vestronidase alfa is an enzyme replacement therapy for the treatment of mucopolysaccharidosis type VII (MPS VII), also known as Sly syndrome, which is an inherited, rare genetic metabolic condition that targets a small subset of population. MPS VII is a progressive condition that affects most tissues and organs due to the lack of a lysosomal enzyme called beta-glucuronidase, leading to buildup of toxic metabolites. The disorder is initiated with skeletal abnormalities, including short stature, along with other pathological conditions including enlarged liver and spleen, heart valve abnormalities, and narrowed airways which can lead to lung infections and trouble breathing. Last two conditions are leading causes of fatalities in patients with MPS VII. 

Some affected individuals do not survive infancy, while others may live into adolescence or adulthood and patients may experience developmental delay and progressive intellectual disability [FDA Label]. In clinical trials, vestronidase alfa treatment demonstrated improvement and stabilization in motor symptoms by increasing the patients' ability to walk longer distances in comparison to treatment with placebo . Few patients also experienced improved pulmonary function. 

Vestronidase alfa was FDA-approved on November 17th, 2017 under the trade name Mepsevii as an intravenous infusion for the treatment of pediatric and adult patients.

**Indication.** Indicated in pediatric and adult patients for the treatment of Mucopolysaccharidosis VII (MPS VII, Sly syndrome).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:22 | 2:59 | 0/1/0 | 1/0/0 | 0/0/0 | 23,835/12,438 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Qi_2019_reference](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md) | — | 2-compartment (no model) | 4 | Qi (2019) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uCS](drugs/drug_vestronidase_alfa/pd_Qi_2019_uCS.md) | urinary chondroitin sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi (2019) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Qi_2019_uDS](drugs/drug_vestronidase_alfa/pd_Qi_2019_uDS.md) | urinary dermatan sulfate ← vestronidase alfa · direct Emax (saturable) effect | — | Qi (2019) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vestronidase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…alfa-vjbk is not expected to be eliminated through renal or fecal excretion. No excretion…”</sub> | prose |
| excretion | kidney | <sub>“…ronidase alfa-vjbk is not expected to be eliminated through renal or fecal excretion. No e…”</sub> | prose |

<sub>Actors without a tissue in the table: GUSB (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Qi_2019_2 | relevant | 10 | 0 | This is a population-PK study of vestronidase alfa, but no numeric disposition parameters are present in the provided evidence. |
| PD | Qi_2019_2 | not_relevant | 0 | 0 | The provided text is only a correction notice and contains no vestronidase alfa PK/PD, dose-response, concentration-effect analysis, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 11:20 UTC</sub>
