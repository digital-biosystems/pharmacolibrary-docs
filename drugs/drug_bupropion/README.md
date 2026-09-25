<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;bupropion&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bupropion_Butz1981_reference&quot;,&quot;label&quot;:&quot;Butz_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bupropion/Bupropion_Butz1981_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bupropion

- **generic name:** bupropion
- **ATC codes:** `A08AA62`, `N06AX12`, `N06AX62`
- **DrugBank:** [DB01156](https://go.drugbank.com/drugs/DB01156)
- **groups:** approved, investigational

## About

**Description.** Bupropion (also known as the brand name product Wellbutrin®) is a norepinephrine/dopamine-reuptake inhibitor (NDRI) used most commonly for the management of Major Depressive Disorder (MDD), Seasonal Affective Disorder (SAD), and as an aid for smoking cessation. Bupropion exerts its pharmacological effects by weakly inhibiting the enzymes involved in the uptake of the neurotransmitters norepinephrine and dopamine from the synaptic cleft, therefore prolonging their duration of action within the neuronal synapse and the downstream effects of these neurotransmitters. More specifically, bupropion binds to the norepinephrine transporter (NET) and the dopamine transporter (DAT).[A6399,A178810]

Bupropion was originally classified as an "atypical" antidepressant because it does not exert the same effects as the classical antidepressants such as Monoamine Oxidase Inhibitors (MAOIs), Tricyclic Antidepressants (TCAs), or Selective Serotonin Reuptake Inhibitors (SSRIs). While it has comparable effectiveness to typical first-line options for the treatment of depression such as SSRIs,[A178798,A178804] bupropion is a unique option for the treatment of MDD as it lacks any clinically relevant serotonergic effects, typical of other mood medications, or any effects on histamine or adrenaline receptors.[A6399,A178840] Lack of activity at these receptors results in a more tolerable side effect profile; bupropion is less likely to cause sexual side effects, sedation, or weight gain as compared to SSRIs or TCAs, for example.[A178804,A178807]

When used as an aid to smoking cessation, bupropion is thought to confer its anti-craving and anti-withdrawal effects by inhibiting dopamine reuptake, which is thought to be involved in the reward pathways associated with nicotine, and through the antagonism of the nicotinic acetylcholinergic receptor.[A178825,A1966,A16508] A Cochrane Review of meta-analyses of available treatment modalities for smoking cessation found that abstinence rates appro

**Indication.** Bupropion is indicated for the treatment of major depressive disorder (MDD), seasonal affective disorder (SAD), and as an aid to smoking cessation. 

When used in combination with [naltrexone] as the marketed product ContraveⓇ, bupropion is indicated as an adjunct to a reduced-calorie diet and increased physical activity for chronic weight management in adults with an initial body mass index (BMI) of: 30 kg/m^2 or greater (obese) or 27 kg/m^2 or greater (overweight) in the presence of at least one weight-related comorbid condition (e.g., hypertension, type 2 diabetes mellitus, or dyslipidemia).

Bupropion is also used off-label as a first-line treatment in patients with ADHD and comorbid bipolar disorder when used as an adjunct to mood stabilizers.[F4624]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 06:32 | 0:12 | 0/1/0 | 0/0/0 | 0/0/0 | 3,792/287 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Butz_1981_reference](drugs/drug_bupropion/Bupropion_Butz1981_reference.md) | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bupropion) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…eta-chlorobenzoic acid, which is then excreted as the major urinary metabolite. The potenc…”</sub> | prose |
| metabolism | liver | `CYP2B6` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor, `CYP2E1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…10% of the radioactive dose were recovered in the urine and feces, respectively. However,…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), HTR3A (negative modulator), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 135 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Butz_1981.pdf` | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | popPK | 9 | not captured | [6785419](https://pubmed.ncbi.nlm.nih.gov/6785419) | The study reports quantitative PK parameters (half-life, bioavailability, Cmax) for bupropion in dogs, but specific clearance and volume values are not explicitly listed in the text. |
| `Wang_2006.pdf` | Wang JS et al., Population pharmacokinetic analysis of…, Psychopharmacology (2006) | popPK | 8 | [10.1007/s00213-005-0209-y](https://doi.org/10.1007/s00213-005-0209-y) | [16283256](https://pubmed.ncbi.nlm.nih.gov/16283256) | The study is a population PK analysis in mice involving bupropion, but the provided evidence only contains qualitative interaction results (fold-changes in AUC) and lacks specific numeric PK parameter values (CL, V, ka) for bupropion. |

<sub>queue written 2026-09-22T06:32:05.697421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2006 | relevant | 8 | 2 | The study is a population PK analysis in mice involving bupropion, but the provided evidence only contains qualitative interaction results (fold-changes in AUC) and lacks specific numeric PK parameter values (CL, V, ka) for bupropion. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 06:32 UTC</sub>
