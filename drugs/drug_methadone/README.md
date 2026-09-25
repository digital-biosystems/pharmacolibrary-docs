<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;methadone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methadone_Foster2004_reference&quot;,&quot;label&quot;:&quot;Foster_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Foster2004_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methadone

- **generic name:** methadone
- **ATC codes:** `N07BC02`
- **DrugBank:** [DB00333](https://go.drugbank.com/drugs/DB00333)
- **groups:** approved, investigational

## About

**Description.** Methadone is a potent synthetic analgesic that works as a full µ-opioid receptor (MOR) agonist and N-methyl-d-aspartate (NMDA) receptor antagonist. As a full MOR agonist, methadone mimics the natural effects of the body's opioids, endorphins, and enkephalins through the release of neurotransmitters involved in pain transmission. It also has a number of unique characteristics that have led to its increased use in the last two decades; in particular, methadone has a lower risk of neuropsychiatric toxicity compared to other opioids (due to a lack of active metabolites), minimal accumulation in renal failure, good bioavailability, low cost, and a long duration of action.[F4685,F4688,F4691,A185885,A185900,A185903] 

Due to its unique mechanism of action, methadone is particularly useful for the management of hard to treat pain syndromes such as neuropathic pain and cancer pain requiring higher and more frequent doses of shorter-acting opioids.[A185888,A185891,A185897] Compared with [morphine], the gold standard reference opioid, methadone also acts as an agonist of κ- and σ-opioid receptors, as an antagonist of the N-methyl-D-aspartate (NMDA) receptor, and as an inhibitor of serotonin and norepinephrine uptake.[A497,A5344] Specifically by inhibiting the NMDA receptor, methadone dampens a major excitatory pain pathway within the central nervous system.[A185876] Compared to other opioids, methadone's effects on NMDA inhibition may explain it's improved analgesic efficacy and reduced opioid tolerance.[A185891,A185894]

Methadone shares similar effects and risks of other opioids such as [morphine], [hydromorphone], [oxycodone], and [fentanyl]. However, it also has a unique pharmacokinetic profile. Compared with short-acting and even extended-release formulations of [morphine], methadone displays a comparatively longer duration of action and half-life. These effects make methadone a good option for the treatment of severe pain and addiction as fewer doses are needed to ma

**Indication.** Methadone is indicated for the management of pain severe enough to require an opioid analgesic and for which alternative treatment options are inadequate. It's recommended that use is reserved for use in patients for whom alternative treatment options (eg, nonopioid analgesics, opioid combination products) are ineffective, not tolerated, or would be otherwise inadequate to provide sufficient management of pain.[F4688]

Methadone is also indicated for detoxification treatment of opioid addiction (heroin or other morphine-like drugs), and for maintenance substitution treatment for opioid dependence in adults in conjunction with appropriate social and medical services.[F4685,F4691]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 19 | 3/0 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Foster_2004_reference](drugs/drug_methadone/Methadone_Foster2004_reference.md) | Foster DJ et al., Population pharmacokinetics of (R)-, (S…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02079.x](https://doi.org/10.1111/j.1365-2125.2004.02079.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methadone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | stomach | <sub>“…ay reflect the pharmacological effect of opioids in slowing gastric emptying and mobility.…”</sub> | prose |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…ther inactive metabolites, which are excreted mainly in the urine. Methadone first undergo…”</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer/substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…iated by extensive biotransformation, followed by renal and fecal excretion. Unmetabolized…”</sub> | prose |
| excretion | kidney | <sub>“…one is mediated by extensive biotransformation, followed by renal and fecal excretion. Unm…”</sub> | prose |
| target | adipose tissue | `CYP19A1` substrate | DrugBank actor |
| target | ovary | `CYP19A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), CHRNA4 (target), CHRNA7 (target), CHRNB2 (target), CYP2C18 (substrate), GRIN1 (target), HTR3A (target), OPRD1 (target), OPRM1 (target), UGT2B4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 114 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:23 UTC</sub>
