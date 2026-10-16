<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;trimetazidine&quot;}]"></div>

# trimetazidine

- **generic name:** trimetazidine
- **ATC codes:** `C01EB15`
- **DrugBank:** [DB09069](https://go.drugbank.com/drugs/DB09069) · **PubChem:** [CID 21109](https://pubchem.ncbi.nlm.nih.gov/compound/21109)
- **molar mass:** 266.341 g/mol (C14H22N2O3) — DrugBank
- **groups:** approved, investigational

## About

Trimetazidine is a cardiac drug used to treat angina pectoris, acting as a vasodilator agent. It is approved and sold under many brand names, and is also being studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q674703](https://www.wikidata.org/wiki/Q674703) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:45 | 1:08 | 0/0/0 | 0/1/0 | 0/0/0 | 103,412/4,176 | einfracz / qwen3.8-27b | 7 | 4/7 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Morin_1998_swelling](drugs/drug_trimetazidine/pd_Morin_1998_swelling.md) | mitochondrial swelling ← trimetazidine · direct sigmoid Emax (Hill) effect | — | Morin D et al., Evidence for the existence of [3H]-trim…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701755](https://doi.org/10.1038/sj.bjp.0701755) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trimetazidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ACAA2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 82 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Körnicke_2020.pdf` | Körnicke T et al., Single Ascending Dose Study to Assess P…, Drug research (2020) | popPK | 9 | [10.1055/a-1180-4357](https://doi.org/10.1055/a-1180-4357) | [32886932](https://pubmed.ncbi.nlm.nih.gov/32886932) | The evidence provides quantitative PK parameters including clearance (CL/F, CLR), Cmax, and half-life for trimetazidine in humans. |
| `Ding_2007.pdf` | Ding L et al., Sensitive and rapid LC-ESI-MS method fo…, Journal of pharmaceutical a… (2007) | popPK | 7 | [10.1016/j.jpba.2007.01.041](https://doi.org/10.1016/j.jpba.2007.01.041) | [17349764](https://pubmed.ncbi.nlm.nih.gov/17349764) | The paper describes a study of trimetazidine pharmacokinetics in humans, but the evidence provided only contains method development details (LLOQ, range, SD) and no actual PK parameter values (CL, V, t1/2). |
| `Génissel_2004.pdf` | Génissel P et al., Assessment of the sustained release pro…, European journal of drug me… (2004) | popPK | 7 | [10.1007/BF03190575](https://doi.org/10.1007/BF03190575) | [15151172](https://pubmed.ncbi.nlm.nih.gov/15151172) | The study reports PK parameters for trimetazidine, but the evidence contains only pharmacodynamic/pharmacokinetic descriptors (Cmax, Tmax, trough, fluctuation) and lacks explicit quantitative values for clearance (CL), volume (V), or rate constants (ka, k) required for full PK extraction. |
| `Othman_2021.pdf` | Othman AI et al., Trimetazidine Dihydrochloride Pulsatile…, Current drug delivery (2021) | popPK | 6 | [10.2174/1567201818666210212095932](https://doi.org/10.2174/1567201818666210212095932) | [33583377](https://pubmed.ncbi.nlm.nih.gov/33583377) | The study reports trimetazidine pharmacokinetics in New Zealand rabbits but provides only summary metrics (Cmax, Tmax, bioavailability) without full compartmental parameters (CL, Vd, ka, t1/2). |
| `Tan_2025.pdf` | Tan D et al., Evaluation of the Pharmacokinetics, Bio…, Clinical pharmacology in dr… (2025) | popPK | 5 | [10.1002/cpdd.1582](https://doi.org/10.1002/cpdd.1582) | [40765434](https://pubmed.ncbi.nlm.nih.gov/40765434) | The study reports population PK parameters (Cmax, AUC, t1/2) for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Kennedy_1998.pdf` | Kennedy JA et al., Effect of trimetazidine on carnitine pa…, Cardiovascular drugs and th… (1998) | pd | 4 | [10.1023/a:1007768716934](https://doi.org/10.1023/a:1007768716934) | [9825181](https://www.ncbi.nlm.nih.gov/pubmed/9825181) | metadata signals extractable PD data (IC50) |
| `Simon_2001.pdf` | Simon N et al., [Effects of trimetazidine on altered fu…, Therapie (2001) | pd | 4 | not captured | [11806297](https://www.ncbi.nlm.nih.gov/pubmed/11806297) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T23:45:40.380979+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelrahman_2022 | irrelevant | 0 | 0 | The study investigates the protective effect of trimetazidine on kidney injury (mechanistic/toxicology) and reports renal function markers, but contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Abreu_2011 | irrelevant | 0 | 0 | The study uses trimetazidine as a renal protective agent in pigs and measures renal function via iohexol clearance, not trimetazidine's own pharmacokinetic parameters. |
| popPK | Albengres_1996 | irrelevant | 0 | 0 | The study investigates pharmacodynamic interactions in immunological models and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Albengres_1996 | not_relevant | 1 | 0 | The paper reports qualitative lack of interaction and statistical significance (P-values) but provides no numeric PD parameters (Emax, EC50) or concentration-effect curves for trimetazidine. |
| popPK | Amini_2019 | irrelevant | 0 | 0 | The study evaluates renoprotective effects and molecular markers in a renal injury model, not pharmacokinetic parameters. |
| popPK | Ancerewicz_1998 | irrelevant | 0 | 0 | The study is an in-vitro investigation of antioxidant properties and structure-activity relationships, reporting no pharmacokinetic parameters. |
| PD | Ancerewicz_1998 | not_relevant | 0 | 0 | The paper investigates the antioxidant activity and structure-activity relationships (QSAR) of trimetazidine derivatives in vitro, not the pharmacodynamic or exposure-response relationship of the drug trimetazidine in a biological system. |
| popPK | Barré_2003 | irrelevant | 4 | 0 | The paper is relevant as it studies the PK of trimetazidine, but the abstract reports only qualitative trends (e.g., "significantly longer", "significantly decreased") and correlations, without providing any specific numeric PK parameter values (such as specific CL, V, or t1/2 numbers) in the evidence. |
| popPK | Barseem_2023 | irrelevant | 1 | 0 | The study focuses on the in vitro interaction between trimetazidine and human serum albumin (binding affinity, thermodynamics, and docking) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Ka) for the drug in vivo. |
| PD | Barseem_2023 | not_relevant | 0 | 0 | The paper focuses on in vitro binding interactions between trimetazidine and human serum albumin (HSA), reporting thermodynamic and structural data rather than any pharmacodynamic exposure-response or dose-response relationship. |
| popPK | Ben_2006 | irrelevant | 0 | 0 | The study evaluates trimetazidine's protective effects on liver graft function and injury markers in an isolated perfused liver model, not its pharmacokinetic disposition parameters. |
| popPK | Ben_2007 | irrelevant | 0 | 0 | The study is a mechanistic liver preservation experiment using trimetazidine as a protective additive, not a pharmacokinetic study, and reports no disposition parameters for trimetazidine. |
| popPK | Borowicz-Reutt_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in mice regarding antiepileptic interactions and does not report any quantitative pharmacokinetic parameters for trimetazidine. |
| PD | Borowicz-Reutt_2022 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent interactions (e.g., TMZ 20-120 mg/kg decreases phenobarbital effect) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Cau_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic study on renal ischemia in pigs, reporting functional outcomes (creatinine clearance) and histological markers, not quantitative pharmacokinetic parameters (CL, V, ka) for trimetazidine. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of astragalosides using trimetazidine only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Chen_2006 | not_relevant | 0 | 0 | The paper focuses on the protective effects of astragalosides, using trimetazidine only as a positive control without reporting any exposure-response or dose-response data for it. |
| popPK | Dayanithi_2007 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of trimetazidine's effect on AMPA/kainate receptors in rat neurons, containing no pharmacokinetic disposition parameters. |
| popPK | Dimitrova_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological evaluation of novel hybrid molecules, not the pharmacokinetics of trimetazidine. |
| PD | Dimitrova_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel hybrid compounds, not a pharmacodynamic or exposure-response relationship for trimetazidine itself. |
| popPK | Ding_2007 | relevant | 7 | 2 | The paper describes a study of trimetazidine pharmacokinetics in humans, but the evidence provided only contains method development details (LLOQ, range, SD) and no actual PK parameter values (CL, V, t1/2). |
| popPK | Doğan_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel trimetazidine derivatives as AChE inhibitors, containing no pharmacokinetic data for trimetazidine itself. |
| PD | Doğan_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel trimetazidine derivatives, not a pharmacodynamic or exposure-response relationship for the drug trimetazidine itself. |
| popPK | Elimadi_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial swelling and does not report pharmacokinetic parameters (CL, V, ka, etc.) for trimetazidine. |
| popPK | Elimadi_2001 | irrelevant | 0 | 0 | The study focuses on the mechanistic anti-ischemic properties of a trimetazidine derivative (S-15176) and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Faure_2004 | irrelevant | 0 | 0 | The study focuses on the protective effects of trimetazidine on kidney graft function (creatinine clearance) in pigs, not on the pharmacokinetic parameters (CL, V, t1/2) of trimetazidine itself. |
| PGx | Fontana_2026 | not_relevant | 0 | 0 | The paper investigates the use of trimetazidine to inhibit fatty acid oxidation in cancer cells to surmount chemoresistance, but it does not report how specific gene variants or genotypes alter the pharmacokinetics or pharmacodynamics of trimetazidine. |
| popPK | Galal_2020 | irrelevant | 0 | 0 | This is a clinical efficacy study comparing trimetazidine and allopurinol for nephropathy prevention, reporting only creatinine levels and clearance, with no pharmacokinetic parameters (CL, V, ka, etc.) for trimetazidine. |
| popPK | Goujon_2000 | irrelevant | 0 | 0 | The study reports renal function outcomes (clearance of creatinine) in pig kidney transplants, not the pharmacokinetic parameters (CL, V, half-life) of trimetazidine itself. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The paper focuses on the design and biological evaluation of novel borneol derivatives, mentioning trimetazidine only as a structural comparator without reporting any pharmacokinetic parameters for it. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The paper focuses on novel borneol derivatives and only mentions trimetazidine as a structural reference; it does not report any pharmacodynamic or exposure-response data for trimetazidine. |
| popPK | Génissel_2004 | relevant | 7 | 2 | The study reports PK parameters for trimetazidine, but the evidence contains only pharmacodynamic/pharmacokinetic descriptors (Cmax, Tmax, trough, fluctuation) and lacks explicit quantitative values for clearance (CL), volume (V), or rate constants (ka, k) required for full PK extraction. |
| popPK | Hamdan_2001 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo mechanistic investigation of enzyme inhibition (CPT-1) and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | Han_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis where trimetazidine is used only as a ROS scavenger, with no pharmacokinetic parameters reported. |
| PD | Han_2008 | not_relevant | 0 | 0 | The paper investigates the mechanism of pyrogallol-induced apoptosis and mentions trimetazidine only as a ROS scavenger that failed to reduce intracellular O2- levels, without providing any dose-response data, concentration-effect curve, or PD parameters for trimetazidine. |
| popPK | Hauet_2000 | irrelevant | 0 | 0 | The study focuses on the cytoprotective effects of trimetazidine on renal function in pig kidney transplantation and does not report pharmacokinetic parameters (e.g., clearance, volume) for the drug. |
| popPK | Hazelhoff_2021 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation in rats where trimetazidine is used as a protective agent against mercury-induced injury, with no pharmacokinetic parameters reported. |
| popPK | Hazem_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor mechanism of action (glycolysis/AKT signaling) and cytotoxicity, not pharmacokinetic disposition parameters. |
| popPK | Helmy_2014 | irrelevant | 4 | 2 | The study reports non-compartmental bioequivalence metrics (Cmax, AUC, t1/2) without specific quantitative values in the text, and lacks compartmental PK parameters (CL, V) required for population modeling. |
| popPK | Ibrahim_2017 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of trimetazidine in preventing contrast-induced nephropathy and reports clinical outcomes (CIN rates) rather than pharmacokinetic parameters. |
| popPK | Joseph_2022 | irrelevant | 0 | 0 | The paper is a review of drugs for overactive bladder and mentions trimetazidine only as a miscellaneous target without providing any pharmacokinetic parameters. |
| PD | Joseph_2022 | not_relevant | 1 | 0 | The paper is a review of drugs for overactive bladder that mentions trimetazidine only as a miscellaneous target without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Kantor_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's effect on cardiac metabolism in isolated rat hearts and does not report any pharmacokinetic parameters. |
| popPK | Karpov_2004 | irrelevant | 0 | 0 | This is a clinical efficacy study measuring myocardial perfusion and hemodynamics, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Kaur_2003 | irrelevant | 1 | 0 | The study reports renal function and histopathological data for trimetazidine in rats, but contains no pharmacokinetic parameters (CL, V, ka, t1/2) for the drug itself. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro biological activity of novel hybrid compounds, with no pharmacokinetic data or mention of trimetazidine. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening of novel amidoxime derivatives, not a pharmacodynamic or exposure-response analysis for trimetazidine. |
| popPK | Kennedy_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (CPT-1) and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Kennedy_1998 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (CPT-1 inhibition) in rat hearts, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | This is an epidemiological study investigating the risk of parkinsonism associated with trimetazidine use, containing no pharmacokinetic parameters. |
| PD | Kim_2020 | not_relevant | 4 | 2 | The study reports a cumulative dose-response relationship for parkinsonism risk using hazard ratios, but it is an epidemiological cohort study, not a pharmacodynamic (exposure-response) analysis with numeric PD parameters like Emax or EC50. |
| popPK | Klouz_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on sigma receptor binding of a trimetazidine derivative (S-16950) and does not report pharmacokinetic parameters for trimetazidine. |
| PD | Klouz_2001 | not_relevant | 3 | 2 | The paper reports an in vitro binding affinity (IC50) for a trimetazidine derivative (S-16950) at sigma receptors, but does not provide an in vivo pharmacodynamic exposure-response or dose-response relationship for trimetazidine itself. |
| popPK | Kuba_1976 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of action of trimetazidine on frog end-plate membranes and does not report pharmacokinetic disposition parameters. |
| popPK | Liu_2012 | relevant | 3 | 9 | The study reports standard non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC, t1/2z) for trimetazidine in humans, but lacks the specific population-PK model parameters (CL, Vd, Q) typically required for population modeling. |
| PGx | Lkhagva_2025 | not_relevant | 2 | 5 | The study investigates the effect of a gene on the therapeutic efficacy (PD) of trimetazidine regarding cellular metabolic parameters, but does not report changes in the drug's pharmacokinetics (ADME) or direct dose-response pharmacodynamics (e.g., receptor binding, standard clinical PD) driven by the genotype. |
| popPK | Luneva_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating anti-anginal effects and quality of life, containing no pharmacokinetic parameters or disposition data for trimetazidine. |
| PD | Luneva_2019 | not_relevant | 1 | 0 | The paper is a clinical pilot study reporting clinical outcomes (angina frequency, quality of life) before and after treatment, but it does not measure drug concentrations or perform any PK/PD modeling, thus lacking extractable PD parameters. |
| popPK | Mahfoudh-Boussaid_2012 | irrelevant | 0 | 0 | The study is a pharmacological investigation of trimetazidine's protective mechanisms against renal ischemia/reperfusion injury in rats, reporting functional and molecular outcomes (creatinine clearance, ER stress markers) rather than trimetazidine's own pharmacokinetic disposition parameters. |
| popPK | Mahfoudh-Boussaid_2014 | irrelevant | 0 | 0 | This is a mechanistic study examining signaling pathways and oxidative stress markers in a rat model, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for trimetazidine. |
| popPK | Martinez_2025 | irrelevant | 0 | 0 | The paper is a clinical case report regarding post-COVID-19 syndrome and thrombophilia, where trimetazidine is mentioned only as a therapeutic agent for angina control, with no pharmacokinetic data or disposition parameters reported. |
| PGx | Martinez_2025 | not_relevant | 0 | 0 | The paper describes a case report of post-COVID-19 syndrome with MTHFR/prothrombin mutations and mentions trimetazidine as part of the treatment regimen, but it does not report how these genetic variants affect the pharmacokinetics or pharmacodynamics of trimetazidine. |
| popPK | McCarthy_2016 | irrelevant | 0 | 0 | The paper is a review article discussing the clinical role and mechanisms of trimetazidine, containing no original pharmacokinetic data or quantitative disposition parameters. |
| PD | McCarthy_2016 | not_relevant | 1 | 0 | The text is a review article discussing clinical efficacy and mechanisms of trimetazidine but does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Morin_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial binding sites and does not report pharmacokinetic disposition parameters for trimetazidine. |
| popPK | Nenchev_2020 | irrelevant | 2 | 0 | The study reports relative exposure ratios (AUC/Cmax) for different subgroups but does not provide absolute population pharmacokinetic parameter values such as clearance, volume of distribution, or half-life. |
| popPK | Onay-Besikci_2008 | irrelevant | 2 | 0 | This is a review paper and the evidence provided contains no original quantitative pharmacokinetic parameter values for trimetazidine. |
| popPK | Othman_2021 | relevant | 6 | 2 | The study reports trimetazidine pharmacokinetics in New Zealand rabbits but provides only summary metrics (Cmax, Tmax, bioavailability) without full compartmental parameters (CL, Vd, ka, t1/2). |
| popPK | Rosano_2004 | irrelevant | 0 | 0 | The paper is a clinical review discussing quality of life and general therapy for ischemic heart disease, containing no original pharmacokinetic data or quantitative disposition parameters for trimetazidine. |
| popPK | Seecheran_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of trimetazidine's effect on clopidogrel platelet reactivity and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Seecheran_2019 | not_relevant | 3 | 2 | The study reports a qualitative change in platelet reactivity (PRU) after trimetazidine administration but does not provide concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50) for trimetazidine itself. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | The paper describes a genetically encoded reporter for polyamines and is unrelated to trimetazidine pharmacokinetics. |
| PD | Sharma_2025 | not_relevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and does not investigate trimetazidine or report any pharmacodynamic parameters for it. |
| popPK | Shirahase_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Silveira_2008 | irrelevant | 0 | 0 | The study is a hemodynamic investigation of myocardial protection in a swine working heart model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for trimetazidine. |
| PD | Silveira_2008 | not_relevant | 0 | 0 | The study is a comparative clinical/experimental trial (3 groups) assessing hemodynamic outcomes, not a pharmacokinetic/pharmacodynamic modeling study; it does not report drug concentrations or fit a dose-response curve to derive PD parameters like Emax or EC50. |
| popPK | Simon_1997 | irrelevant | 0 | 0 | The study assesses the mechanistic effect of trimetazidine on mitochondrial ATP synthesis in the context of cyclosporin A nephrotoxicity and does not report pharmacokinetic parameters. |
| popPK | Simon_2001 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PGx | Sternberg_2025 | not_relevant | 0 | 0 | The study investigates tissue-specific in vitro metabolism using pooled human fractions and does not analyze the effect of specific gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Tan_2025 | relevant | 5 | 0 | The study reports population PK parameters (Cmax, AUC, t1/2) for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wang_2023 | irrelevant | 3 | 0 | The study reports bioequivalence parameters (AUC, Cmax) rather than specific disposition parameters (CL, V, half-life) with numeric values, and no specific numeric PK values are present in the evidence. |
| popPK | Won_2018 | irrelevant | 0 | 0 | The study is a retrospective analysis of medication dosing errors and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the cardioprotective mechanism of trimetazidine in sunitinib-induced cardiotoxicity and does not report any pharmacokinetic parameters. |
| PD | Yang_2019 | not_relevant | 2 | 1 | The study reports qualitative cardioprotective effects and an IC50 for sunitinib toxicity, but does not provide a quantitative exposure-response or dose-response model (e.g., Emax, EC50) for trimetazidine. |
| popPK | Zaouali_2010 | irrelevant | 0 | 0 | This is a mechanistic liver preservation study where trimetazidine is used as a co-administered anti-ischemic agent, not as the subject of pharmacokinetic analysis. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study investigates renal function outcomes (SCr, BUN, CCr) in shock patients and does not report any pharmacokinetic parameters (CL, V, ka, half-life) for trimetazidine. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study assesses the preventive efficacy of trimetazidine on contrast-induced nephropathy using renal biomarkers (creatinine, BUN), not its pharmacokinetic disposition parameters. |
| PGx | Zhou_2022 | not_relevant | 0 | 0 | The paper investigates cardiac metabolic dysfunction in mice using trimetazidine as a therapeutic agent, but does not report any pharmacogenomic analysis of trimetazidine's PK or PD parameters. |
| popPK | Zini_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial respiration, not a pharmacokinetic study reporting disposition parameters. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study is a Phase 2a clinical trial focused on safety and pharmacodynamic outcomes (oxidative stress markers) in ALS patients, with no pharmacokinetic parameters reported. |
| PD | van_2025 | not_relevant | 2 | 1 | The study reports mean changes in biomarkers (MDA, 8-OHdG, energy expenditure) during treatment but does not provide drug concentrations or fit a concentration-effect/dose-response model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
