<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;protriptyline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Protriptyline_Ziegler1978_reference&quot;,&quot;label&quot;:&quot;Ziegler_1978_reference&quot;,&quot;href&quot;:&quot;drugs/drug_protriptyline/Protriptyline_Ziegler1978_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# protriptyline

- **generic name:** protriptyline
- **ATC codes:** `N06AA11`
- **DrugBank:** [DB00344](https://go.drugbank.com/drugs/DB00344)
- **groups:** approved

## About

**Description.** Protriptyline hydrochloride is a dibenzocycloheptene-derivative tricyclic antidepressant (TCA). TCAs are structurally similar to phenothiazines. They contain a tricyclic ring system with an alkyl amine substituent on the central ring. In non-depressed individuals, protriptyline does not affect mood or arousal, but may cause sedation. In depressed individuals, protriptyline exerts a positive effect on mood. TCAs are potent inhibitors of serotonin and norepinephrine reuptake. In addition, TCAs down-regulate cerebral cortical &beta;-adrenergic receptors and sensitize post-synaptic serotonergic receptors with chronic use. The antidepressant effects of TCAs are thought to be due to an overall increase in serotonergic neurotransmission. TCAs also block histamine H<sub>1</sub> receptors, alpha<sub>1</sub>-adrenergic receptors and muscarinic receptors, which accounts for their sedative, hypotensive and anticholinergic effects (e.g. blurred vision, dry mouth, constipation, urinary retention), respectively. See toxicity section below for a complete listing of side effects. Protriptyline may be used for the treatment of depression.

**Indication.** For the treatment of depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 04:08 | 6:27 | 0/0/1 | 0/0/0 | 0/0/0 | 31,978/4,397 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Ziegler_1978_reference](drugs/drug_protriptyline/Protriptyline_Ziegler1978_reference.md) | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=protriptyline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…s for approximately 50% of the total drug administered. The fecal excretion pathway seems…”</sub> | prose |
| excretion | kidney | <sub>“…Protriptyline is reported to undergo cumulative urinary excretion during 16 days, which ac…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ziegler_1978.pdf` | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | popPK | 10 | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) | [639433](https://pubmed.ncbi.nlm.nih.gov/639433) | The evidence explicitly reports quantitative pharmacokinetic parameters for protriptyline, including half-life (74.3 hr) and volume of distribution (22.5 L/kg). |
| `Moody_1977.pdf` | Moody JP et al., Pharmacokinetic aspects of protriptylin…, European journal of clinica… (1977) | popPK | 8 | [10.1007/BF00561788](https://doi.org/10.1007/BF00561788) | [832658](https://pubmed.ncbi.nlm.nih.gov/832658) | The paper reports quantitative pharmacokinetic parameters for protriptyline, including a range for half-life (54-198 h) and plasma levels, though specific clearance or volume values are not explicitly listed as single numbers. |

<sub>queue written 2026-09-24T04:07:11.350688+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | The paper is a review that explicitly states more definitive studies are needed to determine plasma levels for protriptyline, and no quantitative pharmacokinetic parameters are provided in the evidence. |
| popPK | An_2020 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel inhibition, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bretylium, and protriptyline is only mentioned as a treatment for orthostatic hypotension without any PK parameters reported. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The study evaluates the spinal anesthetic effect of protriptyline in rats and does not report any pharmacokinetic parameters. |
| PD | Chen_2004 | not_relevant | 3 | 1 | The paper reports qualitative comparisons of spinal anesthetic effects and mentions dose-response studies for other drugs (amitriptyline, bupivacaine, lidocaine), but provides no numeric PD parameters or extractable concentration-effect data for protriptyline. |
| popPK | Daws_1998 | irrelevant | 0 | 0 | The study is an in vivo chronoamperometric analysis of serotonin clearance in rat brain where protriptyline is used only as a norepinephrine transporter inhibitor (comparator/probe), not as the subject drug for PK parameter estimation. |
| popPK | Frazer_1998 | irrelevant | 0 | 0 | The study is a mechanistic in vivo neurochemistry experiment using protriptyline as a probe to assess serotonin transporter function, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Furlanut_1990 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetic data in the elderly and does not present original quantitative parameter values for protriptyline in the provided evidence. |
| PD | Huang_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of 4-aminopyridine-induced contractions; protriptyline is used only as a qualitative tool to block noradrenaline uptake, with no dose-response or PD parameters reported for it. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of protriptyline's effects on rat aortic smooth muscle contractions and does not report any pharmacokinetic parameters. |
| popPK | Johnson-Davis_2012 | irrelevant | 0 | 0 | The paper describes an analytical method (UPLC-MS/MS) for quantifying tricyclic antidepressants and does not report any pharmacokinetic parameters or disposition data for protriptyline. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic efficacy trial in mice measuring withdrawal symptoms, not a pharmacokinetic study, and reports no disposition parameters for protriptyline. |
| popPK | Makhay_1999 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment examining discriminative stimulus effects, not a pharmacokinetic study, and reports no disposition parameters for protriptyline. |
| PD | Makhay_1999 | not_relevant | 2 | 1 | The paper reports a qualitative behavioral observation that high doses of protriptyline partially substituted for clenbuterol, but it does not provide numeric dose-response parameters, concentration-effect data, or a fitted PD model for protriptyline. |
| popPK | Menargues_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of alpha 2-adrenoceptor modulation in rats and does not report any pharmacokinetic parameters for protriptyline. |
| popPK | Risch_1979 | irrelevant | 0 | 0 | The paper is a literature review focusing on the relationship between plasma levels and clinical efficacy, and it explicitly states that the relationship for protriptyline awaits further elucidation, providing no original quantitative pharmacokinetic parameters. |
| popPK | Rudorfer_1999 | irrelevant | 2 | 0 | The paper is a review article that provides only qualitative descriptions and general ranges (e.g., "up to 3 days") without reporting specific quantitative PK parameter values or models for protriptyline. |
| PD | Rüdeberg_1986 | not_relevant | 1 | 2 | The paper focuses on the pharmacological profile of fluperlapine; protriptyline is only mentioned as a tool in a release assay, and no exposure-response or dose-response relationship with numeric PD parameters is reported for protriptyline. |
| PD | Sudoh_2003 | not_relevant | 2 | 1 | The paper reports qualitative efficacy (complete vs. incomplete blockade) at a single concentration for protriptyline and mentions in vitro IC50 values for other drugs, but provides no numeric PD parameters or dose-response curve for protriptyline. |
| popPK | Viala_1980 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic concepts and therapeutic use without reporting original quantitative disposition parameters (CL, V, etc.) for protriptyline. |
| popPK | van_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of drug interactions in cats and does not report any pharmacokinetic parameters for protriptyline. |
| PD | van_1975 | not_relevant | 3 | 1 | The paper describes a qualitative parallel shift in the dose-response curve for protriptyline antagonizing clonidine but does not provide numeric PD parameters or extractable concentration-effect data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 04:07 UTC</sub>
