<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;Methylnaltrexone&quot;}]"></div>

# Methylnaltrexone

- **generic name:** Methylnaltrexone
- **ATC codes:** `A06AH01`
- **DrugBank:** [DB06800](https://go.drugbank.com/drugs/DB06800)
- **groups:** approved, investigational

## About

**Description.** Methylnaltrexone is a pheriphally-acting μ-opioid antagonist that acts on the gastrointestinal tract to decrease opioid-induced constipation without producing analgesic effects or withdrawal symptoms. It is also a weak CYP2D6 inhibitor. FDA approved in 2008.

**Indication.** Treatment of opioids induced constipation in palliative patients that are inadequately responding to laxative therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 10:44 | 12:56 | 0/0/0 | 1/0/0 | 0/0/0 | 136,730/4,650 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/1 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Singleton_2010](drugs/drug_methylnaltrexone/pd_Singleton_2010_VEGF_induced_human_pulmonary_microvascular_en.md) | Singleton PA et al., Methylnaltrexone potentiates the anti-a…, Journal of angiogenesis res… (2010) | [10.1186/2040-2384-2-5](https://doi.org/10.1186/2040-2384-2-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Singleton_2010](drugs/drug_methylnaltrexone/pd_Singleton_2010_VEGF_induced_human_pulmonary_microvascular_en.md) | Singleton PA et al., Methylnaltrexone potentiates the anti-a…, Journal of angiogenesis res… (2010) | [10.1186/2040-2384-2-5](https://doi.org/10.1186/2040-2384-2-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylnaltrexone) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 38 matched, 43 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boscan_2006.pdf` | Boscan P et al., Pharmacokinetics of the opioid antagoni…, American journal of veterin… (2006) | popPK | 10 | [10.2460/ajvr.67.6.998](https://doi.org/10.2460/ajvr.67.6.998) | [16740093](https://pubmed.ncbi.nlm.nih.gov/16740093) | The paper reports quantitative pharmacokinetic parameters (Vss, t1/2, CL) for methylnaltrexone in horses, and the numeric values are explicitly present in the text. |
| `Foss_1997.pdf` | Foss JF et al., Safety and tolerance of methylnaltrexon…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1177/009127009703700105](https://doi.org/10.1177/009127009703700105) | [9048269](https://pubmed.ncbi.nlm.nih.gov/9048269) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for methylnaltrexone in healthy humans, with values explicitly stated in the text. |
| `Murph_2001.pdf` | Murph DB et al., Pharmacokinetic profile of epidurally a…, British journal of anaesthe… (2001) | popPK | 8 | [10.1093/bja/86.1.120](https://doi.org/10.1093/bja/86.1.120) | [11575386](https://pubmed.ncbi.nlm.nih.gov/11575386) | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lin_2014.pdf` | Lin DH et al., Bioavailability of oral methylnaltrexon…, Drug development and indust… (2014) | popPK | 6 | [10.3109/03639045.2012.753899](https://doi.org/10.3109/03639045.2012.753899) | [23327357](https://pubmed.ncbi.nlm.nih.gov/23327357) | The study reports quantitative PK parameters (Cmax, Tmax, T1/2, AUC) for methylnaltrexone in rats, but lacks explicit clearance (CL) or volume (V) values required for a full compartmental model. |
| `Meyer_2019.pdf` | Meyer MJ et al., Opioids as Substrates and Inhibitors of…, Journal of medicinal chemis… (2019) | pd | 5 | [10.1021/acs.jmedchem.9b01301](https://doi.org/10.1021/acs.jmedchem.9b01301) | [31597043](https://www.ncbi.nlm.nih.gov/pubmed/31597043) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T10:42:26.751742+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anselmi_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters for methylnaltrexone. |
| popPK | Best_2017 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where methylnaltrexone is used as a co-administered agent to test effects on vocalizations, with no pharmacokinetic parameters reported. |
| PD | Best_2017 | not_relevant | 1 | 0 | The paper reports qualitative behavioral observations (vocalization rates) in response to fixed doses of morphine and methylnaltrexone, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for methylnaltrexone. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | The paper is an editorial regarding ICU prognostic models (SAPS-II) and does not contain any pharmacokinetic data for methylnaltrexone. |
| PD | Chase_2012 | not_relevant | 0 | 0 | The paper is an editorial discussing prognostic models (SAPS-II) and standardized mortality rates in ICU settings; it contains no pharmacokinetic or pharmacodynamic data for Methylnaltrexone. |
| popPK | Foss_2001 | irrelevant | 1 | 0 | The paper is a review discussing the mechanism and clinical effects of methylnaltrexone without reporting any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Franchi_2019 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticagrelor, with methylnaltrexone serving only as a co-administered agent to test its effect on ticagrelor absorption, and no PK parameters for methylnaltrexone are reported. |
| PD | Franchi_2019 | not_relevant | 2 | 1 | The study reports PK changes and qualitative PD comparisons (no significant difference) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for methylnaltrexone. |
| popPK | Gatti_2012 | irrelevant | 1 | 0 | The paper is a narrative review discussing the clinical management of opioid-induced constipation and does not report original quantitative pharmacokinetic parameter values for methylnaltrexone. |
| PD | Gatti_2012 | not_relevant | 2 | 0 | The text is a narrative review that qualitatively discusses pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Guay_2009 | irrelevant | 2 | 0 | The paper is a review article that summarizes general pharmacokinetic properties but does not provide original quantitative disposition parameters (CL, V, etc.) for methylnaltrexone in the provided evidence. |
| PD | Guay_2009 | not_relevant | 2 | 0 | The paper is a general review of methylnaltrexone's chemistry, PK, and clinical efficacy, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or an exposure-response model in the provided text. |
| PGx | Gudin_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions for PAMORAs and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a cost analysis of symptom management drugs and does not report any pharmacokinetic parameters for methylnaltrexone. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper is a cost analysis of drugs for cancer-associated symptoms and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Holm_2019 | irrelevant | 0 | 0 | The study investigates the effect of methylnaltrexone on the pharmacokinetics of ticagrelor, not the pharmacokinetic parameters of methylnaltrexone itself. |
| PD | Holm_2019 | not_relevant | 0 | 0 | The study is a randomized controlled trial comparing two fixed doses of methylnaltrexone against placebo, reporting only group-level means for platelet reactivity and drug concentrations without fitting a concentration-effect or dose-response model to derive PD parameters. |
| popPK | Holzer_2010 | irrelevant | 0 | 0 | The paper is a narrative review of opioid antagonists for constipation and does not report original quantitative pharmacokinetic parameters for methylnaltrexone. |
| popPK | Jones_2016 | irrelevant | 0 | 0 | The paper is a review of naloxegol, and methylnaltrexone is only mentioned as a comparator class without any quantitative pharmacokinetic parameters provided. |
| PD | Jones_2016 | not_relevant | 1 | 0 | The text is a review of naloxegol that only qualitatively mentions methylnaltrexone as a comparator without providing any numeric PD parameters or exposure-response data. |
| popPK | Kolbow_2016 | irrelevant | 2 | 0 | The study reports pharmacodynamic endpoints (transit time) and relative bioavailability percentages, but does not provide quantitative compartmental PK parameters (CL, V, ka, t1/2) for methylnaltrexone. |
| PD | Kolbow_2016 | not_relevant | 2 | 1 | The study reports qualitative efficacy comparisons and bioavailability ranges but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Kraft_2008 | irrelevant | 0 | 0 | The paper is a clinical review of methylnaltrexone for postoperative ileus and contains no pharmacokinetic data or quantitative disposition parameters. |
| PD | Kraft_2008 | not_relevant | 1 | 0 | The text is a review/summary of clinical trial outcomes for methylnaltrexone in postoperative ileus and does not report any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Leppert_2010 | irrelevant | 0 | 0 | The paper is a clinical review of opioid-induced constipation treatments and does not report any quantitative pharmacokinetic parameters for methylnaltrexone. |
| popPK | Leppert_2015 | irrelevant | 0 | 0 | The paper is a review of emerging therapies for opioid-induced bowel dysfunction and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for methylnaltrexone. |
| PGx | Leppert_2016 | not_relevant | 0 | 0 | The paper is a review of naloxegol and does not report pharmacogenomic effects on methylnaltrexone. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/in-vivo investigation of morphine's effects on lung cancer cells, using methylnaltrexone only as a pharmacological antagonist to block MOR signaling, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 2 | 1 | The study uses methylnaltrexone (MNTX) as a mechanistic antagonist to block morphine effects, but does not report a dose-response curve, Emax, or EC50 for MNTX itself; it only notes that a specific concentration (0.1 µg/µl) reversed morphine-induced changes. |
| popPK | Meyer_2019 | irrelevant | 0 | 0 | The paper focuses on OCT1 transporter interactions with opioids and does not report pharmacokinetic parameters for methylnaltrexone. |
| PD | Meyer_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and transporter interactions (OCT1) of opioids, not on the pharmacodynamic or exposure-response relationship of Methylnaltrexone. |
| PGx | Meyer_2019 | not_relevant | 0 | 0 | The paper focuses on opioids as substrates/inhibitors of OCT1 and does not report pharmacogenomic effects on the PK/PD of methylnaltrexone. |
| popPK | Moss_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for opioid-induced constipation and does not report any pharmacokinetic parameters for methylnaltrexone. |
| PD | Moss_2019 | not_relevant | 2 | 1 | The text describes a clinical trial evaluating efficacy (laxation response and transit time) but does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters like Emax or EC50. |
| popPK | Mozaffari_2018 | irrelevant | 1 | 0 | The paper is a systematic review of clinical evidence and does not report original quantitative pharmacokinetic parameter values for methylnaltrexone. |
| PD | Mozaffari_2018 | not_relevant | 2 | 0 | The text is an abstract of a systematic review that mentions a review of pharmacodynamic data but does not provide any specific numeric PD parameters, exposure-response curves, or dose-effect relationships in the provided text. |
| popPK | Mucha_1989 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on taste aversion and receptor location, not a pharmacokinetic study reporting quantitative disposition parameters for methylnaltrexone. |
| popPK | Murph_2001 | relevant | 8 | 2 | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Portenoy_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for opioid-induced constipation and does not report any pharmacokinetic parameters or quantitative disposition data for methylnaltrexone. |
| popPK | Power_2011 | irrelevant | 0 | 0 | The paper is a general review of analgesics that mentions methylnaltrexone only as a clinical example without providing any pharmacokinetic data or quantitative disposition parameters. |
| PD | Power_2011 | not_relevant | 1 | 0 | The text is a general review article that qualitatively mentions methylnaltrexone's clinical use but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Rotshteyn_2011 | irrelevant | 2 | 0 | The paper is a review article that summarizes pharmacokinetic properties but does not present original quantitative disposition parameters (CL, V, Q) or a compartmental model in the provided evidence. |
| popPK | Rönnpagel_2025 | irrelevant | 0 | 0 | The study is an in-vitro transporter mechanism study using methylnaltrexone as a substrate/probe, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Rönnpagel_2025 | not_relevant | 0 | 0 | The paper reports in vitro transporter kinetics (Km, Vmax, IC50 for OCT1 inhibition) using methylnaltrexone as a substrate, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug's clinical effect. |
| popPK | Sakurada_2002 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor subtypes in mice using methylnaltrexone as a probe antagonist, and it does not report any pharmacokinetic parameters. |
| popPK | Singleton_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of angiogenesis inhibition and does not report pharmacokinetic parameters for methylnaltrexone. |
| popPK | Singleton_2010 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro and in-vivo study on angiogenesis and does not report pharmacokinetic parameters for methylnaltrexone. |
| popPK | Walker_1999 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in rats focusing on the antagonist effects of 3-O-methylnaltrexone on heroin and morphine self-administration, with no pharmacokinetic parameters reported. |
| popPK | Yuan_2000 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for opioid-induced constipation and does not report any pharmacokinetic parameters for methylnaltrexone. |
| PD | Yuan_2000 | not_relevant | 2 | 1 | The paper reports a binary clinical response (laxation yes/no) and mean change in transit time for a single dose, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | unknown_2006 | irrelevant | 0 | 0 | The text is a business and clinical development overview that mentions "predictable pharmacokinetics" but provides no quantitative PK parameters or model values. |
| PD | unknown_2006 | not_relevant | 1 | 0 | The text is a business and clinical development overview that mentions dose levels and trial outcomes but does not report any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or study details for methylnaltrexone. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding Methylnaltrexone or any pharmacodynamic relationship. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or study details. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding Methylnaltrexone or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
