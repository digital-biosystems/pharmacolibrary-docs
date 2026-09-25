<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;methylnaltrexone bromide&quot;}]"></div>

# methylnaltrexone bromide

- **generic name:** methylnaltrexone bromide
- **ATC codes:** `A06AH01`
- **DrugBank:** [DB06800](https://go.drugbank.com/drugs/DB06800)
- **groups:** approved, investigational

## About

**Description.** Methylnaltrexone is a pheriphally-acting μ-opioid antagonist that acts on the gastrointestinal tract to decrease opioid-induced constipation without producing analgesic effects or withdrawal symptoms. It is also a weak CYP2D6 inhibitor. FDA approved in 2008.

**Indication.** Treatment of opioids induced constipation in palliative patients that are inadequately responding to laxative therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 10:52 | 8:06 | 0/0/0 | 1/0/0 | 0/0/0 | 82,013/8,274 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/1 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Singleton_2010](drugs/drug_methylnaltrexone_bromide/pd_Singleton_2010_VEGF_induced_human_pulmonary_microvascular_en.md) | Singleton PA et al., Methylnaltrexone potentiates the anti-a…, Journal of angiogenesis res… (2010) | [10.1186/2040-2384-2-5](https://doi.org/10.1186/2040-2384-2-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Singleton_2010](drugs/drug_methylnaltrexone_bromide/pd_Singleton_2010_VEGF_induced_human_pulmonary_microvascular_en.md) | Singleton PA et al., Methylnaltrexone potentiates the anti-a…, Journal of angiogenesis res… (2010) | [10.1186/2040-2384-2-5](https://doi.org/10.1186/2040-2384-2-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylnaltrexone_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…f of the dose is excreted in the urine and somewhat less in feces.…”</sub> | prose |
| excretion | kidney | <sub>“…ctivity). Approximately half of the dose is excreted in the urine and somewhat less in fec…”</sub> | prose |

<sub>Actors without a tissue in the table: MC4R (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foss_1997.pdf` | Foss JF et al., Safety and tolerance of methylnaltrexon…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1177/009127009703700105](https://doi.org/10.1177/009127009703700105) | [9048269](https://pubmed.ncbi.nlm.nih.gov/9048269) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for methylnaltrexone in healthy humans, with values explicitly stated in the text. |
| `Murph_2001.pdf` | Murph DB et al., Pharmacokinetic profile of epidurally a…, British journal of anaesthe… (2001) | popPK | 8 | [10.1093/bja/86.1.120](https://doi.org/10.1093/bja/86.1.120) | [11575386](https://pubmed.ncbi.nlm.nih.gov/11575386) | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Yuan_2005.pdf` | Yuan CS et al., Tolerability, gut effects, and pharmaco…, Journal of clinical pharmac… (2005) | popPK | 8 | [10.1177/0091270004273491](https://doi.org/10.1177/0091270004273491) | [15831777](https://pubmed.ncbi.nlm.nih.gov/15831777) | The study reports quantitative PK parameters (Cmax, half-life) for methylnaltrexone in humans, but lacks specific values for clearance or volume of distribution. |
| `Lin_2014.pdf` | Lin DH et al., Bioavailability of oral methylnaltrexon…, Drug development and indust… (2014) | popPK | 6 | [10.3109/03639045.2012.753899](https://doi.org/10.3109/03639045.2012.753899) | [23327357](https://pubmed.ncbi.nlm.nih.gov/23327357) | The study reports quantitative PK parameters (Cmax, Tmax, T1/2, AUC) for methylnaltrexone in rats, but lacks explicit clearance or volume of distribution values. |

<sub>queue written 2026-09-11T10:51:50.931677+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anselmi_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters for methylnaltrexone. |
| PD | Boscan_2006 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in GI function (fecal weight, transit time) but does not provide a quantitative concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Foss_2001 | irrelevant | 1 | 0 | The paper is a review discussing the mechanism and clinical effects of methylnaltrexone without reporting quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Holzer_2010 | irrelevant | 0 | 0 | The paper is a narrative review of opioid antagonists for constipation and does not report original quantitative pharmacokinetic parameters for methylnaltrexone. |
| popPK | Kolbow_2016 | irrelevant | 2 | 0 | The study reports bioavailability percentages and qualitative serum level duration but lacks quantitative compartmental PK parameters (CL, V, ka, t1/2) for methylnaltrexone. |
| PD | Kolbow_2016 | not_relevant | 2 | 1 | The study reports qualitative efficacy comparisons and bioavailability ranges but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for methylnaltrexone. |
| popPK | Leppert_2010 | irrelevant | 0 | 0 | The paper is a clinical review of opioid-induced constipation treatments and does not report any quantitative pharmacokinetic parameters for methylnaltrexone. |
| popPK | Leppert_2015 | irrelevant | 0 | 0 | The paper is a review of emerging therapies for opioid-induced bowel dysfunction and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for methylnaltrexone. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro and in-vivo investigation of morphine's effects on lung cancer cells, using methylnaltrexone only as a pharmacological antagonist to block MOR signaling, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 2 | 1 | The study is a mechanistic investigation of morphine's effect on cancer cells using MNTX as a qualitative antagonist; it does not report a quantitative exposure-response or dose-response model with numeric PD parameters for methylnaltrexone. |
| popPK | Mozaffari_2018 | irrelevant | 2 | 0 | The paper is a systematic review of clinical evidence and does not report original quantitative pharmacokinetic parameter values for methylnaltrexone bromide. |
| PD | Mozaffari_2018 | not_relevant | 2 | 0 | The text is an abstract of a systematic review that mentions a review of pharmacodynamic data but does not present or derive any specific numeric PD parameters or exposure-response relationships. |
| popPK | Murph_2001 | relevant | 8 | 2 | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PD | Murph_2001 | not_relevant | 0 | 0 | The paper reports only the pharmacokinetic profile (serum and CSF concentrations) of methylnaltrexone in rabbits and does not provide any pharmacodynamic data, dose-response relationships, or numeric PD parameters. |
| popPK | Rotshteyn_2011 | irrelevant | 2 | 1 | The paper is a review article that summarizes pharmacokinetic properties but does not present original quantitative disposition parameters (CL, V, Q) or a compartmental model in the provided evidence. |
| popPK | Singleton_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of angiogenesis inhibition and does not report any pharmacokinetic parameters for methylnaltrexone. |
| popPK | Singleton_2010 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro and in-vivo study on angiogenesis and does not report pharmacokinetic parameters for methylnaltrexone. |
| popPK | unknown_2006 | irrelevant | 0 | 0 | The text is a business and clinical development overview that mentions "predictable pharmacokinetics" but provides no quantitative PK parameters or model values. |
| PD | unknown_2006 | not_relevant | 1 | 0 | The text is a business and clinical development overview that mentions dose levels and trial outcomes but contains no pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or parameters for methylnaltrexone bromide. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding methylnaltrexone bromide or any pharmacodynamic relationship. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for methylnaltrexone bromide. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding methylnaltrexone bromide or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
