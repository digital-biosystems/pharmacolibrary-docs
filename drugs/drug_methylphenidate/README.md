<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;methylphenidate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Teuscher2015_reference&quot;,&quot;label&quot;:&quot;Teuscher_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_methylphenidate/Methylphenidate_Teuscher2015_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methylphenidate

- **generic name:** methylphenidate
- **ATC codes:** `N06BA04`
- **DrugBank:** [DB00422](https://go.drugbank.com/drugs/DB00422)
- **groups:** approved, investigational

## About

**Description.** Methylphenidate is a central nervous system stimulant used most commonly in the treatment of Attention-Deficit/Hyperactivity Disorder (ADHD) and for narcolepsy. Also known as the marketed products Ritalin, Concerta, or Biphentin, methylphenidate is used with other treatment modalities (psychological, educational, cognitive behaviour therapy, etc) to improve the following group of developmentally inappropriate symptoms associated with ADHD: moderate-to-severe distractibility, short attention span, hyperactivity, emotional lability, and impulsivity. Long-acting formulations of psychostimulants such as methylphenidate, [DB01576], and [DB01255] are considered the most effective and widely used treatment for ADHD, and are considered first-line options for children, adolescents, and adults as recommended by CADDRA (Canadian ADHD Resource Alliance). [L6037] CADDRA recommends the use of methylphenidate due to long term studies, of over twenty years in duration, which show methylphenidate is safe and effective.  

While its exact mechanism is unclear, methylphenidate (MPH) has been shown to act as a norepinephrine and dopamine reuptake inhibitor (NDRI), thereby increasing the presence of these neurotransmitters in the extraneuronal space and prolonging their action.[A177541] There is a dose-related effect of psychostimulants on receptor stimulation, where higher doses are shown to increase norepinephrine (NE) and dopamine (DA) efflux throughout the brain which can result in impaired cognition and locomotor-activating effects. In contrast, low doses are found to selectively activate NE and DA neurotransmission within the prefrontal cortex which is an area of the brain thought to play a prominent role in ADHD pathophysiology, thereby improving clinical efficacy and preventing side effects.[A177547] The lower doses used to treat ADHD are not associated with the locomotor-activating effects associated with higher doses and instead reduce movement, impulsivity, and increase cog

**Indication.** Methylphenidate is indicated for the treatment of Attention Deficit Hyperactivity Disorder (ADHD) in patients 6 years of age and older and for the treatment of narcolepsy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 4/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Teuscher_2015_reference](drugs/drug_methylphenidate/Methylphenidate_Teuscher2015_reference.md) | Teuscher NS et al., Population pharmacokinetics of methylph…, Drug design, development an… (2015) | [10.2147/DDDT.S83234](https://doi.org/10.2147/DDDT.S83234) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylphenidate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…following oral administration; however, owing to extensive first-pass metabolism, bioavail…”</sub> | prose |
| absorption | stomach | <sub>“…e drug overcoat. Within an aqueous environment, such as the stomach, the drug overcoat, wh…”</sub> | prose |
| excretion | bile duct | <sub>“…%-97% of the dose is excreted in the urine and 1%-3% in the feces in the form of metabolit…”</sub> | prose |
| excretion | kidney | <sub>“…of methylphenidate, 78%-97% of the dose is excreted in the urine and 1%-3% in the feces in…”</sub> | prose |

<sub>Actors without a tissue in the table: CES1A1a (substrate), HTR1A (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoyama_1997 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Gomez-Sanchez_2017 | irrelevant | 1 | 0 | This is a pharmacogenetic clinical response study, not a PK study, and no methylphenidate disposition parameters are reported in the provided text. |
| popPK | Linton_2024 | irrelevant | 0 | 0 | This is a behavioral/EEG cross-species MPH paper with no pharmacokinetic compartmental parameters for methylphenidate, and no PK numeric values are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:26 UTC</sub>
