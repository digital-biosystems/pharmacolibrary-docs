<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;lubiprostone&quot;}]"></div>

# lubiprostone

- **generic name:** lubiprostone
- **ATC codes:** `A06AX03`
- **DrugBank:** [DB01046](https://go.drugbank.com/drugs/DB01046)
- **groups:** approved, investigational

## About

**Description.** Lubiprostone is a medication used in the management of idiopathic chronic constipation. A prostaglandin E1 derivative, lubiprostone is a bicyclic fatty acid that activates ClC-2 chloride channels located on the apical side of the gastrointestinal epithelial cells. Activation of these channels promotes the secretion of a chloride-rich fluid that soften the stool, increase gastrointestinal motility, and induce spontaneous bowel movements (SBM).

**Indication.** Lubiprostone is indicated for the treatment of adult patients with chronic idiopathic constipation, or opioid-induced constipation in patients with chronic non-cancer pain.[L4421] It is also indicated for the treatment of irritable bowel syndrome with constipation (IBS-C) in female patients ≥18 years old.[L4421]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 20:55 | 5:03 | 0/0/0 | 1/0/0 | 0/0/0 | 88,627/3,760 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 2/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Fei_2009](drugs/drug_lubiprostone/pd_Fei_2009_Isc.md) | Fei G et al., Stimulation of mucosal secretion by lub…, American journal of physiol… (2009) | [10.1152/ajpgi.90447.2008](https://doi.org/10.1152/ajpgi.90447.2008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fei_2009](drugs/drug_lubiprostone/pd_Fei_2009_short_circuit_current.md) | Fei G et al., Stimulation of mucosal secretion by lub…, American journal of physiol… (2009) | [10.1152/ajpgi.90447.2008](https://doi.org/10.1152/ajpgi.90447.2008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lubiprostone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…oxidation. These biotransformations are not mediated by the hepatic cytochrome P450 system…”</sub> | prose |
| excretion | bile duct | <sub>“…prostone and M3 are only detected in trace amounts in human feces.…”</sub> | prose |
| excretion | kidney | <sub>“…und 1.14 hours, with a majority of the drug excreted in the urine within 48 hours. Lubipro…”</sub> | prose |

<sub>Actors without a tissue in the table: CBR1 (substrate), CLCN2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li Y et al., Pharmacokinetics and Bioequivalence of…, Clinical pharmacology in dr… (2023) | popPK | 8 | [10.1002/cpdd.1212](https://doi.org/10.1002/cpdd.1212) | [36626291](https://pubmed.ncbi.nlm.nih.gov/36626291) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for the metabolite M3 using a non-compartmental model, but lacks specific clearance (CL) or volume (V) values required for full compartmental/population PK extraction. |

<sub>queue written 2026-09-21T20:54:51.024120+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2021 | irrelevant | 2 | 1 | The study reports only AUC ratios for the M3 metabolite to assess bioequivalence, lacking standard quantitative disposition parameters (CL, V, ka) or a compartmental model for lubiprostone. |
| PD | Adams_2021 | not_relevant | 2 | 1 | The paper reports a bioequivalence study comparing two formulations using a fixed dose, providing only group-level mean efficacy (SBM counts) and PK exposure ratios, but lacks any concentration-effect modeling, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Ambizas_2007 | irrelevant | 2 | 0 | The paper is a review article that summarizes general pharmacokinetic properties (e.g., peak plasma concentration time) but does not report quantitative disposition parameters such as clearance, volume of distribution, or compartmental model values. |
| popPK | Camilleri_2010 | irrelevant | 0 | 0 | The paper is a review article discussing mechanisms and efficacy, containing no original quantitative pharmacokinetic parameter values for lubiprostone. |
| PD | Camilleri_2010 | not_relevant | 1 | 0 | The paper is a narrative review of IBS targets and does not report specific numeric PD parameters or exposure-response data for lubiprostone. |
| popPK | Cil_2017 | irrelevant | 0 | 0 | The study focuses on a new CFTR activator (CFTRact-J027) and uses lubiprostone only as a comparator for efficacy, without reporting any pharmacokinetic parameters for lubiprostone. |
| PD | Cil_2017 | not_relevant | 0 | 0 | The paper focuses on a new compound (CFTRact-J027) and only mentions lubiprostone as a qualitative comparator without providing any exposure-response or dose-response data for it. |
| popPK | Cremonini_2012 | irrelevant | 0 | 0 | The paper is a narrative review focused on rifaximin for IBS, and lubiprostone is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Cremonini_2012 | not_relevant | 0 | 0 | The paper is a narrative review focused on rifaximin for IBS-D and only mentions lubiprostone as an approved alternative without providing any pharmacodynamic data or exposure-response analysis for it. |
| popPK | Cuppoletti_2004 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on chloride channel activation and does not report any pharmacokinetic parameters for lubiprostone. |
| popPK | Fei_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of chloride secretion in guinea pig intestine and does not report pharmacokinetic parameters (CL, V, ka, etc.) for lubiprostone. |
| popPK | Fei_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of chloride secretion and intestinal motility in animals, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for lubiprostone. |
| popPK | Lacy_2007 | irrelevant | 2 | 0 | The paper is a review article describing the mechanism and general pharmacokinetics of lubiprostone but does not provide specific quantitative disposition parameters or population-PK model values in the provided evidence. |
| popPK | Lacy_2008 | irrelevant | 2 | 0 | The paper is a review article that discusses the pharmacokinetics of lubiprostone but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| popPK | Lacy_2009 | irrelevant | 2 | 0 | The text is a clinical overview/monograph that mentions pharmacokinetics qualitatively (low bioavailability) but provides no quantitative PK parameters (CL, V, t1/2, etc.) for lubiprostone. |
| popPK | Lacy_2012 | irrelevant | 0 | 0 | The paper is a review of linaclotide, and lubiprostone is mentioned only as a comparator/approved drug without any quantitative PK parameters reported. |
| PGx | Leppert_2016 | not_relevant | 0 | 0 | The paper discusses naloxegol and mentions lubiprostone only as a general prokinetic option, providing no pharmacogenomic data for lubiprostone. |
| popPK | Li_2022 | irrelevant | 4 | 2 | The study reports only summary exposure metrics (Cmax, AUC) for the metabolite 15-hydroxylubiprostone, lacking the specific compartmental or population PK parameters (CL, V, ka, Q) required for extraction. |
| popPK | MacDonald_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of chloride secretion in mice using nasal potential difference measurements, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mousavi_2023 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapy for opioid-induced bowel dysfunction and does not report original quantitative pharmacokinetic parameters for lubiprostone. |
| popPK | Müller-Lissner_2013 | irrelevant | 0 | 0 | The paper is a review of pharmacology and efficacy without original quantitative pharmacokinetic parameter values for lubiprostone. |
| PD | Müller-Lissner_2013 | not_relevant | 1 | 0 | The paper is a qualitative review of pharmacology and efficacy without reporting specific numeric PD parameters or exposure-response models for lubiprostone. |
| popPK | Norimatsu_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chloride channel activation in Xenopus oocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Raschi_2014 | irrelevant | 2 | 0 | The paper is a review article summarizing regulatory and safety aspects without providing original quantitative pharmacokinetic parameter values for lubiprostone. |
| PD | Raschi_2014 | not_relevant | 2 | 1 | The text is a review article summarizing regulatory and safety aspects without providing specific numeric PD parameters or detailed exposure-response data. |
| popPK | Sanger_2008 | irrelevant | 0 | 0 | The paper is a review discussing drug development strategies for GI disorders and mentions lubiprostone only as a recently approved agent without providing any pharmacokinetic data. |
| PD | Sanger_2008 | not_relevant | 1 | 0 | The text is a review discussing drug development strategies and mentions lubiprostone only as a recently approved agent without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper is a computational drug repurposing study focusing on molecular docking and binding affinity, not a pharmacokinetic study reporting quantitative disposition parameters for lubiprostone. |
| popPK | Vazquez_2011 | irrelevant | 0 | 0 | The paper is a review of linaclotide, and lubiprostone is only mentioned as a comparator with side effects, with no PK parameters reported. |
| PD | Vazquez_2011 | not_relevant | 0 | 0 | The text is a review of linaclotide and only mentions lubiprostone in the context of side effects (nausea) without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for lubiprostone. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of bowel movement frequency, not a pharmacokinetic study, and contains no PK parameters for lubiprostone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
