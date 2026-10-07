<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;naratriptan&quot;}]"></div>

# naratriptan

- **generic name:** naratriptan
- **ATC codes:** `N02CC02`
- **DrugBank:** [DB00952](https://go.drugbank.com/drugs/DB00952) · **PubChem:** [CID 4440](https://pubchem.ncbi.nlm.nih.gov/compound/4440)
- **molar mass:** 335.464 g/mol (C17H25N3O2S) — DrugBank
- **groups:** approved

## About

Naratriptan is a serotonin 5-HT1 receptor agonist used to treat migraine attacks. It is an approved medicine and is used widely as an antimigraine drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421315](https://www.wikidata.org/wiki/Q421315) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:32 | 1:56 | 0/0/0 | 0/0/3 | 0/0/0 | 107,556/4,592 | einfracz / qwen3.8-27b | 6 | 3/4 | 5/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Maas_2006_Pain_free_transition_state_2_3](drugs/drug_naratriptan/pd_Maas_2006_Pain_free_transition_state_2_3.md) | Pain free (transition state 2-3) ← naratriptan · direct Emax (saturable) effect | — | Maas HJ et al., A model-based approach to treatment com…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02670.x](https://doi.org/10.1111/j.1365-2125.2006.02670.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Maas_2006_Pain_relief_transition_state_1_2](drugs/drug_naratriptan/pd_Maas_2006_Pain_relief_transition_state_1_2.md) | Pain relief (transition state 1-2) ← naratriptan · direct Emax (saturable) effect | — | Maas HJ et al., A model-based approach to treatment com…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02670.x](https://doi.org/10.1111/j.1365-2125.2006.02670.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [MaassenVanDenBrink_1998_Coronary_artery_contraction](drugs/drug_naratriptan/pd_MaassenVanDenBrink_1998_Coronary_artery_contraction.md) | Coronary artery contraction ← naratriptan · direct Emax (saturable) effect | — | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 0.95).">pig</span> | [Wainscott_1998_GTPgammaS_binding](drugs/drug_naratriptan/pd_Wainscott_1998_GTPgammaS_binding.md) | [35S]GTPgammaS binding biomarker turnover ← naratriptan | — | Wainscott DB et al., Human 5-HT1F receptor-stimulated [35S]G…, European journal of pharmac… (1998) | [10.1016/s0014-2999(98)00336-7](https://doi.org/10.1016/s0014-2999(98)00336-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=naratriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 59 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gueorguieva_2005.pdf` | Gueorguieva I et al., Uncertainty analysis in pharmacokinetic…, Pharmaceutical research (2005) | pd | 5 | [10.1007/s11095-005-6629-x](https://doi.org/10.1007/s11095-005-6629-x) | [16180118](https://www.ncbi.nlm.nih.gov/pubmed/16180118) | metadata signals extractable PD data (PK/PD) |
| `Nestorov_2001.pdf` | Nestorov I et al., Modeling and stimulation for clinical t…, Pharmaceutical research (2001) | pd | 5 | [10.1023/a:1010943430471](https://doi.org/10.1023/a:1010943430471) | [11587494](https://www.ncbi.nlm.nih.gov/pubmed/11587494) | metadata signals extractable PD data (PK-PD) |
| `Pauwels_1998.pdf` | Pauwels PJ et al., Pharmacological analysis of G-protein a…, British journal of pharmaco… (1998) | pd | 5 | [10.1038/sj.bjp.0701584](https://doi.org/10.1038/sj.bjp.0701584) | [9484854](https://www.ncbi.nlm.nih.gov/pubmed/9484854) | metadata signals extractable PD data (Emax) |
| `Connor_1997.pdf` | Connor HE et al., Naratriptan: biological profile in anim…, Cephalalgia : an internatio… (1997) | pd | 4 | [10.1046/j.1468-2982.1997.1703145.x](https://doi.org/10.1046/j.1468-2982.1997.1703145.x) | [9170336](https://www.ncbi.nlm.nih.gov/pubmed/9170336) | metadata signals extractable PD data (EC50) |
| `Hou_2019.pdf` | Hou M et al., Efficacy of triptans for the treatment…, European journal of clinica… (2019) | pd | 4 | [10.1007/s00228-019-02748-4](https://doi.org/10.1007/s00228-019-02748-4) | [31446449](https://www.ncbi.nlm.nih.gov/pubmed/31446449) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Moret_1997.pdf` | Moret C et al., 5-HT autoreceptors in the regulation of…, Neuropharmacology (1997) | pd | 4 | [10.1016/s0028-3908(97)00145-7](https://doi.org/10.1016/s0028-3908(97)00145-7) | [9517443](https://www.ncbi.nlm.nih.gov/pubmed/9517443) | metadata signals extractable PD data (concentration-effect) |
| `Newman-Tancredi_1997.pdf` | Newman-Tancredi A et al., Agonist activity of antimigraine drugs…, Naunyn-Schmiedeberg's archi… (1997) | pd | 4 | [10.1007/pl00005000](https://doi.org/10.1007/pl00005000) | [9205951](https://www.ncbi.nlm.nih.gov/pubmed/9205951) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T06:31:33.116042+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adelman_2001 | irrelevant | 1 | 0 | This is a qualitative review comparing clinical efficacy and general PK profiles of triptans without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for naratriptan. |
| popPK | Amundsen_2021 | irrelevant | 1 | 0 | The study reports Relative Infant Dose (RID) for breastfeeding, not systemic PK parameters like clearance or volume, and lacks specific plasma/milk concentration-time data for modeling. |
| popPK | Belvis_2014 | irrelevant | 1 | 0 | The paper is a general review of migraine treatment strategies and does not report quantitative pharmacokinetic parameters for naratriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including naratriptan, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a general review on triptan selection without reporting quantitative pharmacokinetic parameters for naratriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for naratriptan. |
| popPK | Brêtas_2016 | irrelevant | 0 | 0 | Naratriptan is used solely as an internal standard for a pharmacokinetic study of naproxen and sumatriptan, not as the subject drug. |
| popPK | Christensen_2001 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Connor_1997 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Connor_1997 | not_relevant | 0 | 0 | The paper describes the biological profile in animal models but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters for naratriptan. |
| popPK | Deleu_2000 | irrelevant | 2 | 0 | This is a comparative review discussing pharmacokinetics but provides no quantitative numerical parameters for naratriptan in the evidence provided. |
| popPK | Duléry_1997 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| popPK | Fox_2000 | irrelevant | 1 | 0 | The paper is a comparative analysis of tolerability and does not report specific pharmacokinetic parameters (CL, V, etc.) for naratriptan. |
| PD | Fox_2000 | not_relevant | 2 | 1 | The paper discusses qualitative rank orders and correlations between dose/exposure and adverse events but does not provide numeric PD parameters (e.g., Emax, EC50) or a specific concentration-effect curve for naratriptan. |
| popPK | Färkkilä_2005 | irrelevant | 0 | 0 | The paper is a clinical review of eletriptan where naratriptan is mentioned only as a comparator in efficacy trials, with no pharmacokinetic data reported for naratriptan. |
| popPK | Gueorguieva_2005 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Hou_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of efficacy (pain-free/relief rates) and does not report pharmacokinetic parameters for naratriptan. |
| popPK | Jhee_2001 | irrelevant | 2 | 1 | This is a review article that summarizes pharmacokinetic properties of multiple triptans but does not present original quantitative PK parameter values (like CL, V, or ka) for naratriptan in the provided text. |
| PD | Jhee_2001 | not_relevant | 1 | 0 | The text is a comparative review of pharmacokinetic properties (bioavailability, half-life) and general mechanisms, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for naratriptan. |
| popPK | Kassem_2016 | irrelevant | 2 | 0 | This is a narrative review of formulation approaches for triptans and does not report original quantitative pharmacokinetic parameter values for naratriptan. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The paper is a clinical review comparing gepants and triptans for migraine treatment and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Maas_2006 | relevant | 5 | 1 | The paper performs a population PK analysis for naratriptan to drive a PK/PD model, but the specific numeric PK parameters (CL, V, ka) are not reported in the text or tables provided; only a rough half-life estimate is mentioned in the discussion. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring coronary artery contraction, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for naratriptan. |
| popPK | Macone_2017 | irrelevant | 0 | 0 | This is a narrative review of triptan development and clinical use, containing no original quantitative pharmacokinetic parameters for naratriptan. |
| popPK | Matthaei_2016 | irrelevant | 1 | 0 | Naratriptan is only mentioned as a secondary substrate in a mechanistic study focused on sumatriptan PK, with no quantitative PK parameters provided for naratriptan. |
| PGx | Matthaei_2016 | not_relevant | 2 | 0 | The paper focuses on sumatriptan; naratriptan is only mentioned as a secondary transporter substrate without specific PK/PD data or genotype effects. |
| popPK | Millson_2000 | irrelevant | 1 | 0 | This is a clinical review of triptan management that discusses pharmacokinetic profiles qualitatively but does not report specific quantitative parameters (CL, V, ka, etc.) for naratriptan. |
| popPK | Moret_1997 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of 5-HT autoreceptors where naratriptan is used as a pharmacological tool, not a PK study. |
| PD | Moret_1997 | not_relevant | 2 | 1 | The paper describes qualitative effects of naratriptan on 5-HT release in an in vitro/in vivo animal model but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for naratriptan. |
| popPK | Nestorov_2001 | irrelevant | 2 | 0 | The paper focuses on clinical trial design and simulation using a PK-PD model, but the specific quantitative PK parameter values (CL, V, etc.) are not reported in the provided evidence. |
| PD | Nestorov_2001 | not_relevant | 4 | 2 | The paper describes the development of a PK-PD model for trial simulation but the provided text does not contain the specific numeric PD parameters (e.g., Emax, EC50) or the model equations required to extract them. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Newman-Tancredi_1997 | not_relevant | 3 | 2 | The paper reports in vitro receptor binding/agonist activity (functional affinity) rather than an in vivo pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50 in a clinical or PK/PD context. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological analysis of receptor-mediated cell growth, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Pauwels_1998 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Pauwels_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of 5-HT1B receptors in guinea-pig cells and does not mention naratriptan or report any exposure-response or dose-response data for it. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic contractile potency and efficacy parameters, not pharmacokinetic disposition parameters for naratriptan. |
| popPK | Saito_2023 | irrelevant | 0 | 0 | Naratriptan is used as one of nine test substrates to characterize mouse MATE1 transport mechanisms, not as the subject of a pharmacokinetic parameter estimation study, and no PK parameters (CL, V, ka, etc.) for naratriptan are reported. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 2 | 0 | This is a comparative review of triptans in migraine that mentions half-life qualitatively but does not report quantitative population-PK parameters (CL, V, ka) for naratriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 1 | 0 | The text is a comparative review summarizing clinical efficacy (therapeutic gain) and PK parameters, but it does not report any exposure-response or dose-response modeling, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 0 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, ka, etc.) for naratriptan. |
| PD | Tfelt-Hansen_2011 | not_relevant | 3 | 2 | The paper is a review that qualitatively describes dose-response curves for naratriptan (efficacy plateau at 7.5 mg) but does not provide a formal PD model or a table of numeric effect values from which specific PD parameters (like Emax or EC50) can be derived. |
| popPK | Tfelt-Hansen_2019 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and therapeutic delay, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for naratriptan. |
| PD | Tfelt-Hansen_2019 | not_relevant | 2 | 1 | The paper is a qualitative review discussing the delay of effect and comparing Tmax with time to maximum effect (Emax) for various drugs, but it does not report a quantitative concentration-effect model or specific numeric PD parameters (like EC50 or slope) for naratriptan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 3 | 3 | This is a clinical mini-review that cites general PK descriptors (t1/2, Tmax, bioavailability) for naratriptan but does not report original quantitative population-pharmacokinetic parameters such as clearance (CL), volume (V), or intercompartmental clearance (Q). |
| popPK | Tokuoka_2014 | irrelevant | 2 | 1 | The study is a retrospective pharmacodynamic analysis of receptor occupancy for multiple triptans, not a primary PK study reporting quantitative disposition parameters (CL, V, ka) for naratriptan. |
| popPK | Tokuoka_2015 | irrelevant | 2 | 0 | This is a theoretical receptor occupancy analysis using PK data from other studies for multiple triptans, not a primary PK study providing quantitative disposition parameters for naratriptan. |
| popPK | Valentin_1998 | irrelevant | 0 | 0 | This is an in vitro pharmacological study measuring contractile responses in canine coronary arteries, not a pharmacokinetic study of naratriptan disposition. |
| popPK | Villalón_2002 | irrelevant | 0 | 0 | The paper is a review of migraine pharmacology that mentions naratriptan only as a second-generation triptan without reporting any quantitative pharmacokinetic parameters. |
| popPK | Villalón_2003 | irrelevant | 0 | 0 | The paper is a narrative review on migraine pathophysiology and treatment that mentions naratriptan only in the context of drug class and general properties, without providing quantitative PK parameters. |
| popPK | Vishwanathan_2000 | irrelevant | 0 | 0 | The study reports only the validation of a quantification method (LC/MS/MS) and does not provide any pharmacokinetic parameters for naratriptan. |
| popPK | Wainscott_1998 | irrelevant | 0 | 0 | The paper is a receptor binding study correlating in vitro potency with an in vivo guinea pig model of plasma protein extravasation, reporting no pharmacokinetic parameters for naratriptan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
