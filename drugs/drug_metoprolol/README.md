<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Metoprolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metoprolol/Metoprolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Metoprolol_Taguchi2004_reference&quot;,&quot;label&quot;:&quot;Taguchi_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# metoprolol

- **generic name:** metoprolol
- **ATC codes:** `C07AB02`, `C07BB02`, `C07BB52`, `C07CB02`, `C07FB02`, `C07FB13`, `C07FX03`, `C07FX05`
- **DrugBank:** [DB00264](https://go.drugbank.com/drugs/DB00264)
- **groups:** approved, investigational

## About

**Description.** Metoprolol is a selective beta-1 blocker commonly employed as the succinate and tartrate derivatives depending if the formulation is designed to be of immediate release or extended release.[A175159, L5530] The possibility of the generation of these formulations comes from the lower systemic bioavailability of the succinate derivative.[T274] To this date, it is one of the preferred beta-blockers in general clinical guidelines and it is widely prescribed in the Netherlands, New Zealand, and the US.[A175162] Metoprolol was developed since 1969 by US Pharmaceutical Holdings I and FDA approved in 1978.[L5527]

**Indication.** Metoprolol is indicated for the treatment of angina, heart failure, myocardial infarction, atrial fibrillation, atrial flutter and hypertension.[A175141,L36065,L45553]

Some off-label uses of metoprolol include supraventricular tachycardia and thyroid storm.[A175141]

All the indications of metoprolol are part of cardiovascular diseases. These conditions correspond to a number of diseases that involve the function of the heart and blood vessels. The underlying causes of these conditions are variable and can be due to genetic disposition, lifestyle decisions such as smoking, obesity, diet, and lack of exercise, and comorbidity with other conditions such as diabetes. The cardiovascular diseases are the leading cause of death on a global scale.[L5533]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 14 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Kir_2025_reference](drugs/drug_metoprolol/Metoprolol_Kir2025_reference.md) | Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025) | [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1642](https://doi.org/10.1248/bpb.27.1642) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metoprolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…dministered orally, it is almost completely absorbed in the gastrointestinal tract.[A17514…”</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (inhibitor), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 104 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luethy_2022.pdf` | Luethy D et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13037](https://doi.org/10.1111/jvp.13037) | [34913168](https://pubmed.ncbi.nlm.nih.gov/34913168) | The paper studies metoprolol as the subject drug in horses and explicitly reports numeric PK parameters in the full text. |

<sub>queue written 2026-07-18T22:23:24.469048+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ghazi_2022 | irrelevant | 1 | 1 | Metoprolol is only a treatment comparator in a hypertension outcomes study, and no metoprolol PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:27 UTC</sub>
