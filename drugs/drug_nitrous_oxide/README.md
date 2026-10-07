<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;nitrous oxide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NitrousOxide_Hampsey2026_reference&quot;,&quot;label&quot;:&quot;Hampsey_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nitrous_oxide/NitrousOxide_Hampsey2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nitrous oxide

- **generic name:** nitrous oxide
- **ATC codes:** `N01AX13`
- **DrugBank:** [DB06690](https://go.drugbank.com/drugs/DB06690) · **PubChem:** [CID 948](https://pubchem.ncbi.nlm.nih.gov/compound/948)
- **molar mass:** 44.0128 g/mol (N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Nitrous oxide is an inhalational general anaesthetic and non-opioid analgesic used for pain relief and sedation, including in situations such as respiratory distress. It is an approved medicine that is widely used, and it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905750](https://www.wikidata.org/wiki/Q905750) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nitrous_oxide | metabolite | 44.0128 | N2O | DrugBank | [948](https://pubchem.ncbi.nlm.nih.gov/compound/948) | Lindholm_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:21 | 24:46 | 1/1/0 | 0/1/0 | 0/0/0 | 957,683/43,590 | einfracz / qwen3.8-27b | 34 | 7/25 | 34/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hampsey_2026_reference](drugs/drug_nitrous_oxide/NitrousOxide_Hampsey2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hampsey E et al., A systematic review of the pharmacokine…, Journal of psychopharmacolo… (2026) | [10.1177/02698811261453938](https://doi.org/10.1177/02698811261453938) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lindholm_2026_reference](drugs/drug_nitrous_oxide/NitrousOxide_Lindholm2026_reference.md) | — | 1-compartment (no model) | 6 | Lindholm AØ et al., Concentration and Detection Time of Nit…, Drug testing and analysis (2026) | [10.1002/dta.70053](https://doi.org/10.1002/dta.70053) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Liang_2020_LCS](drugs/drug_nitrous_oxide/pd_Liang_2020_LCS.md) | lung collapse ← nitrous oxide · direct Emax (saturable) effect | — | Liang C et al., The fraction of nitrous oxide in oxygen…, BMC anesthesiology (2020) | [10.1186/s12871-020-01102-x](https://doi.org/10.1186/s12871-020-01102-x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 747 matched, 152 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Timcenko_1995.pdf` | Timcenko A et al., Estimation of pharmacokinetic model par…, Proceedings. Symposium on C… (1995) | popPK | 9 | not captured | [8563327](https://pubmed.ncbi.nlm.nih.gov/8563327) | The paper describes a pharmacokinetic study for nitrous oxide (N2O) in humans, but the specific numeric parameter values are not present in the provided text, likely residing in results tables or figures not included here. |
| `Wongvanich_2015.pdf` | Wongvanich N et al., Robust global identifiability theory us…, Mathematical biosciences (2015) | popPK | 5 | [10.1016/j.mbs.2015.01.013](https://doi.org/10.1016/j.mbs.2015.01.013) | [25660327](https://pubmed.ncbi.nlm.nih.gov/25660327) | The paper uses the nitrous oxide uptake model as a theoretical example for identifiability methods but provides no specific numeric PK parameter values (CL, V, etc.) in the evidence. |

<sub>queue written 2026-10-07T04:16:42.342668+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of propofol, not nitrous oxide. |
| popPK | Avram_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, with nitrous oxide only used as a background anesthetic agent. |
| popPK | Barakat_2008 | irrelevant | 0 | 0 | The study investigates the anesthetic potency (EC50) of propofol when combined with nitrous oxide, rather than reporting pharmacokinetic parameters for nitrous oxide itself. |
| PGx | Baum_2007 | not_relevant | 3 | 0 | The text discusses potential interactions between nitrous oxide and genetic variations in vitamin B12 metabolism, but it is a general review/commentary that does not report specific quantitative changes in PK or PD parameters. |
| PGx | Bell_2024 | not_relevant | 0 | 0 | This paper analyzes bacterial denitrification genetics and has no relation to human pharmacogenomics or nitrous oxide pharmacokinetics. |
| popPK | Benitez-Aurioles_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer Na[18F]F in mice, while nitrous oxide is used solely as a component of the anesthesia mixture. |
| PGx | Biju_2021 | not_relevant | 0 | 0 | The paper studies silicon effects on drought stress in lentil plants, not human pharmacogenomics of nitrous oxide. |
| popPK | Boehm-Sturm_2025 | irrelevant | 0 | 0 | The study focuses on MRI biomarkers for glucose metabolism in stroke rats, using N2O only as an anesthetic gas; it does not report PK parameters for nitrous oxide. |
| popPK | Bona_2022 | irrelevant | 0 | 0 | The paper is a soil science study on hydrochar properties and N2O emissions, not a pharmacokinetic study of nitrous oxide gas. |
| PGx | Boyd_2011 | not_relevant | 0 | 0 | The paper describes the FAD binding of a bacterial protein (ApbE) and mentions nitrous oxide only in the context of homologs involved in bacterial nitrogen metabolism, not in pharmacogenomics of drug PK/PD. |
| popPK | Burm_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alfentanil, with nitrous oxide serving only as a background anaesthetic agent. |
| popPK | Caldwell_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vecuronium, with nitrous oxide used only as an anesthetic background agent. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper discusses the production of nitrous oxide (N2O) as a greenhouse gas in wastewater treatment reactors (MABRs) and does not involve pharmacokinetic or metabolic studies in biological systems. |
| PGx | Coleman_2020 | not_relevant | 0 | 0 | The paper discusses the production of nitrous oxide (N2O) as a byproduct of bacterial metabolism, not the pharmacokinetics or pharmacodynamics of N2O as a pharmaceutical drug in humans. |
| popPK | Colin_2025 | irrelevant | 0 | 0 | The study reports population PK parameters for remimazolam, not for nitrous_oxide (which was only a permitted auxiliary agent). |
| popPK | Coste_2000 | irrelevant | 0 | 0 | The study is a clinical trial assessing the effect of nitrous oxide on movement and BIS values during intubation, and does not report quantitative pharmacokinetic parameters (clearance, volume, etc.) for the drug. |
| popPK | DHonneur_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pipecuronium, not nitrous oxide, which is used only as an anesthetic background agent. |
| popPK | Dai_2026 | irrelevant | 0 | 0 | The paper is a neuroimaging (fMRI) study of consciousness and brain network organization where nitrous oxide is used merely as a pharmacological perturbant (probe), and it reports no quantitative pharmacokinetic parameters (clearance, volume, etc.) for nitrous oxide. |
| popPK | De_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, using nitrous oxide only as a background agent for maintenance of anesthesia. |
| popPK | Deighton_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of dizocilpine (MK-801) using functional ultrasound imaging, and nitrous oxide is only mentioned as part of the anesthesia mixture, not as the subject drug for PK parameter estimation. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | The paper describes the pharmacology and efficacy of a WNT surrogate (L6-F4-2) in mice, with no mention of nitrous oxide or its pharmacokinetics. |
| popPK | Dragne_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rocuronium, while nitrous oxide is only used as a background anesthetic agent, so no PK parameters are reported for nitrous oxide. |
| popPK | Drover_1998 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for remifentanil, with nitrous oxide serving only as a co-administered anesthetic background gas rather than the subject drug. |
| popPK | Dubey_2020 | irrelevant | 0 | 0 | The study evaluates gabapentin and ondansetron for preventing nausea and vomiting and does not contain any pharmacokinetic data for nitrous oxide. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding nitrate and nitrite toxicity in feed, not a pharmacokinetic study of nitrous oxide. |
| popPK | Eger_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of action (MAC values and NMDA receptor blockade) of nitrous oxide and other anesthetics, not its pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Finholt_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lidocaine, while nitrous oxide is only used as an anesthetic agent. |
| popPK | Fisher_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for atracurium, with nitrous oxide used only as a co-administered anesthetic agent. |
| PGx | Fiskerstrand_1997 | not_relevant | 0 | 0 | The study investigates the interaction between methotrexate and nitrous oxide on methionine synthase activity in cell lines, not the effect of a specific gene variant on nitrous oxide pharmacokinetics or pharmacodynamics. |
| popPK | Fukagawa_2014 | irrelevant | 0 | 0 | The study focuses on the mechanism of antinociception (opioid receptors) and behavioral endpoints (MAC, writhing test) rather than quantitative pharmacokinetic disposition parameters. |
| popPK | Fukunaga_1998 | irrelevant | 0 | 0 | Nitrous oxide is used only as a carrier gas for anesthesia in this study of airway remodeling and reactivity, with no pharmacokinetic parameters measured for nitrous oxide itself. |
| PGx | Ganie_2020 | not_relevant | 0 | 0 | The paper studies maize metabolism under nitrogen deficiency and mentions nitrous oxide as an environmental byproduct, not as a drug subject to pharmacogenomic analysis. |
| popPK | Gariepy_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxacurium, with nitrous oxide serving only as an anesthetic agent. |
| popPK | Gill_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, with nitrous oxide only mentioned as a maintenance anesthetic agent, not as the subject of the PK analysis. |
| popPK | Ginsberg_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fentanyl, with nitrous oxide only serving as a co-administered anesthetic agent. |
| popPK | Gronert_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of metocurine, with nitrous oxide used only as an anesthetic agent. |
| popPK | Habre_1996 | irrelevant | 0 | 0 | The study measures respiratory mechanics in children and uses nitrous oxide only as a co-administered anaesthetic agent, not as the subject of pharmacokinetic analysis. |
| popPK | Habre_1999 | irrelevant | 0 | 0 | The study investigates respiratory mechanics under sevoflurane anesthesia where nitrous oxide is used only as a carrier/co-administered agent, and no pharmacokinetic parameters for nitrous oxide are reported. |
| PGx | Hakeem_2017 | not_relevant | 0 | 0 | The paper discusses environmental sources, health effects, and remediation of nitrates and nitrous oxide, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Hamaguchi_1992 | not_relevant | 0 | 0 | The paper studies hemodynamic effects of nitroprusside and nitroglycerin in dogs and does not report any pharmacogenomic variations affecting nitrous oxide PK or PD. |
| popPK | Hampsey_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetics for LSD, psilocybin, DMT, mescaline, and 5-MEO-DMT; nitrous oxide is mentioned only as a historical reference to Humphrey Davy's experiments and has no PK data reported. |
| popPK | Heerdt_2016 | irrelevant | 0 | 0 | Nitrous oxide is used as a co-administered anesthetic agent, not the subject drug, and no pharmacokinetic parameters for it are reported. |
| popPK | Hoke_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remifentanil, its metabolite, and alfentanil in dogs, with nitrous oxide used only as an anesthetic co-administered agent and not reported for PK parameters. |
| popPK | Hood_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the monoclonal antibody MEDI7836, not for nitrous oxide. |
| popPK | Imbeault_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisatracurium, with nitrous oxide used only as part of the anesthetic background. |
| popPK | Jaklitsch_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of neuromuscular blocking agents, with nitrous oxide serving only as an optional background anesthetic agent rather than the subject drug. |
| popPK | Jang_2024 | irrelevant | 0 | 0 | This is a neuroimaging/machine learning study classifying brain states; it does not report pharmacokinetic parameters (CL, V, etc.) for nitrous oxide. |
| popPK | Jevtovic-Todorovic_2003 | irrelevant | 0 | 0 | The paper is a neurotoxicity study in rats measuring neuronal vacuolization and cell death, not a pharmacokinetic study reporting quantitative disposition parameters for nitrous oxide. |
| PGx | Johnson_2026 | not_relevant | 0 | 0 | The paper reviews anesthetic complications in mitochondrial diseases and does not report pharmacokinetic or pharmacodynamic parameters for nitrous oxide, only noting it was safe in specific TIVA cases. |
| popPK | Kaullen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CW002, not nitrous oxide. |
| popPK | Kerner_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of biochar effects on soil microbiology and greenhouse gas emissions, unrelated to nitrous oxide pharmacokinetics. |
| PGx | Khairunisa_2023 | not_relevant | 0 | 0 | The paper discusses microbial nitrogen transformation and nitrous oxide emissions from manure storage, not pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Khalil_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rocuronium, with nitrous oxide only listed as a co-administered anesthetic agent. |
| popPK | Kirov_2004 | irrelevant | 0 | 0 | The study focuses on the neuromuscular blocking effects of cisatracurium and atracurium; nitrous oxide is listed only as a co-administered anesthetic agent, not the subject of pharmacokinetic analysis. |
| popPK | Kopman_2000 | irrelevant | 0 | 0 | The study investigates the dose-response of rapacuronium, and nitrous oxide is only a co-administered anesthetic agent, not the subject of PK analysis. |
| popPK | Kopman_2000_2 | irrelevant | 0 | 0 | The study focuses on the dose-response relationships of neuromuscular blocking drugs (rocuronium and succinylcholine), using nitrous oxide only as an adjunct for anesthesia maintenance without analyzing its pharmacokinetics. |
| popPK | Kopman_2005 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of nitrous oxide on rocuronium potency (ED50), not the pharmacokinetic parameters of nitrous oxide itself. |
| popPK | Kratimenos_2022 | irrelevant | 0 | 0 | The study is a computational model of neuronal excitotoxicity and calcium signaling in piglets; nitrous oxide is only used as an anesthetic gas and its pharmacokinetics are not studied. |
| popPK | Kreuer_2007 | irrelevant | 0 | 0 | The paper is a review discussing PK-PD concepts for inhaled anaesthetics generally, with no original quantitative PK parameters (CL, V, etc.) provided for nitrous oxide. |
| popPK | Larijani_1989 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of propofol, with nitrous oxide (N2O) mentioned only as a co-administered anesthetic agent. |
| popPK | Lee_2009 | irrelevant | 0 | 0 | The study models the cerebral oximetry (rSO2) response to desflurane, with nitrous oxide acting only as a co-administered agent affecting cerebrovascular reactivity, not as the subject of a pharmacokinetic analysis. |
| popPK | Liang_2020 | irrelevant | 0 | 0 | The study investigates the effective concentration (EC50/EC95) of nitrous oxide for lung collapse during surgery, which is a pharmacodynamic/clinical outcome study, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Manji_2011 | not_relevant | 1 | 2 | The paper is a review of toxic neuropathies that only briefly mentions nitrous oxide as a cause of myeloneuropathy without discussing any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Markakis_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of mivacurium, and nitrous oxide is only used as a component of the background anesthesia regimen, not as the subject of pharmacokinetic analysis. |
| popPK | McCann_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sevoflurane, and nitrous oxide is only listed as a co-administered maintenance gas without any specific pharmacokinetic parameters reported for it. |
| PGx | McIntyre_1985 | not_relevant | 0 | 0 | The paper discusses differential sensitivities in mouse lines to various anesthetics, but it does not report a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of nitrous oxide. |
| PGx | Miller_1995 | not_relevant | 0 | 0 | The paper focuses on mivacurium and edrophonium; nitrous oxide is used only as a background anesthetic agent, and no pharmacogenomic effects on nitrous oxide PK/PD are reported. |
| popPK | Morris_1981 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of edrophonium, with nitrous oxide serving only as an anaesthetic agent, and contains no PK parameters for nitrous oxide. |
| popPK | Nagele_2005 | irrelevant | 0 | 0 | The paper studies the mechanism of xenon in C. elegans with nitrous oxide mentioned only as a comparative mechanism reference, and contains no pharmacokinetic parameters. |
| popPK | Nambyiah_2021 | irrelevant | 0 | 0 | The study is a behavioral phenotyping experiment in C. elegans investigating neurodevelopmental toxicity, and it does not report any quantitative pharmacokinetic parameters for nitrous oxide (which is only mentioned in background literature). |
| PGx | Neidhardt_1992 | not_relevant | 0 | 0 | The paper discusses general caution regarding genetic polymorphism but does not report specific pharmacogenomic effects on the PK/PD of nitrous oxide. |
| popPK | Ngamprasertwong_2012 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Nomura_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vecuronium bromide, not nitrous oxide, which is used only as a background anesthetic agent. |
| popPK | Ollier_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ropivacaine, not nitrous oxide. |
| popPK | Ornstein_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisatracurium, and nitrous oxide is only mentioned as a co-administered anesthetic agent. |
| popPK | Palanca_2023 | irrelevant | 0 | 0 | The study is a functional MRI neuroimaging investigation of brain connectivity changes, not a pharmacokinetic study, and contains no quantitative disposition parameters (CL, V, ka) for nitrous oxide. |
| popPK | Parker_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of atracurium, using nitrous oxide only as a co-administered anaesthetic agent rather than the subject of PK analysis. |
| popPK | Patel_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urocortins 1, 2, and 3 in sheep, not nitrous oxide. |
| PGx | Pečnik_2024 | not_relevant | 0 | 0 | The study concerns nitrogen excretion in dairy cows, not the pharmacokinetics or pharmacodynamics of nitrous oxide as a drug. |
| popPK | Pittelkow_2014 | irrelevant | 0 | 0 | The paper is an agricultural study on rice yields and greenhouse gas emissions, unrelated to the pharmacokinetics of nitrous oxide. |
| popPK | Ranasinghe_2025 | irrelevant | 0 | 0 | The paper is a systematic review of biomarkers in diabetic cardiomyopathy in rodents and does not mention nitrous oxide or report any pharmacokinetic parameters for it. |
| popPK | Rimaniol_1996 | irrelevant | 0 | 0 | The study focuses on the neuromuscular blocking effects of atracurium, mivacurium, and vecuronium, with nitrous oxide used only as an anesthetic carrier gas, and no pharmacokinetic parameters for nitrous oxide are reported. |
| popPK | Samarska_2009 | irrelevant | 0 | 0 | The study investigates the vascular pharmacodynamic effects (vasoreactivity) of nitrous oxide in mice, not its pharmacokinetic disposition parameters (clearance, volume, etc.). |
| popPK | Schiere_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mivacurium, with nitrous oxide used only as a co-administered anaesthetic agent. |
| PGx | Schmitt_2008 | not_relevant | 1 | 0 | The text mentions that SNPs in enzymes inhibited by nitrous oxide are common, but it does not report specific data or results on how a variant changes a PK or PD parameter. |
| popPK | Seifen_1979 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for procaine, not nitrous oxide. |
| popPK | Sfez_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etomidate, not nitrous oxide. |
| popPK | Shafer_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, with nitrous oxide serving only as a co-administered anesthetic agent. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sevoflurane, and nitrous oxide is only a co-administered agent without reported PK parameters. |
| PGx | Silva_2023 | not_relevant | 0 | 0 | The study assesses occupational toxicity markers (genetic instability, oxidative stress) in workers, not the pharmacokinetic or pharmacodynamic parameters of nitrous oxide administration. |
| popPK | Sprung_2020 | irrelevant | 0 | 0 | The study evaluates long-term cognitive outcomes in older adults and does not report pharmacokinetic parameters (CL, V, ka, etc.) for nitrous oxide. |
| PGx | Srikanth_2016 | not_relevant | 0 | 0 | The paper studies gene expression in rice plants, not human pharmacogenomics or the pharmacokinetics of nitrous oxide. |
| popPK | Stricker_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ε-aminocaproic acid, not nitrous oxide. |
| popPK | Sturkenboom_2021 | irrelevant | 0 | 0 | The paper is a review of anti-tuberculosis drugs (e.g., isoniazid, rifampicin) and does not study nitrous oxide. |
| popPK | Takagishi_2021 | irrelevant | 0 | 0 | The paper studies PDGF-B nanoparticle therapy in a mouse stroke model and does not investigate the pharmacokinetics of nitrous oxide. |
| popPK | Tatsuki_2026 | irrelevant | 0 | 0 | The paper is an observational economic analysis of anesthetic vaporizer prices, not a pharmacokinetic study, and nitrous oxide is not the subject of analysis. |
| popPK | Tedeschi_2021 | irrelevant | 0 | 0 | The paper is a review on phytochemicals in ruminant production and does not report pharmacokinetic parameters for nitrous oxide. |
| popPK | Timcenko_1995 | relevant | 9 | 2 | The paper describes a pharmacokinetic study for nitrous oxide (N2O) in humans, but the specific numeric parameter values are not present in the provided text, likely residing in results tables or figures not included here. |
| popPK | Torda_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of suxamethonium, with nitrous oxide only serving as an anesthetic carrier gas rather than the subject drug. |
| popPK | Tran_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisatracurium, with nitrous oxide serving only as part of the anesthetic background. |
| popPK | Vrijdag_2021 | irrelevant | 0 | 0 | The study measures EEG temporal complexity and psychometric performance, not pharmacokinetic disposition parameters. |
| PGx | Wang_2008 | not_relevant | 1 | 0 | The paper is a review on developmental neurotoxicity of anesthetics that mentions pharmacogenomic approaches only as a potential future tool, without reporting any specific gene variant effects on PK or PD parameters of nitrous oxide. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexmedetomidine, not nitrous oxide. |
| popPK | White_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for propofol, while nitrous oxide is only mentioned as a co-administered agent. |
| popPK | Woloszczuk-Gebicka_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rocuronium, with nitrous oxide serving only as an anesthetic co-administered agent. |
| popPK | Wongvanich_2015 | irrelevant | 5 | 0 | The paper uses the nitrous oxide uptake model as a theoretical example for identifiability methods but provides no specific numeric PK parameter values (CL, V, etc.) in the evidence. |
| PGx | Woodside_1984 | not_relevant | 0 | 0 | The study investigates the interaction between captopril and sodium nitroprusside, with no mention of gene variants or pharmacogenomics affecting nitrous oxide. |
| popPK | Xue_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vecuronium, with nitrous oxide only used as a maintenance anaesthetic agent. |
| popPK | Xue_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vecuronium, with nitrous oxide serving only as a background anesthetic agent. |
| popPK | Yamakura_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on potassium channels, reporting no pharmacokinetic parameters for nitrous oxide. |
| popPK | van_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rocuronium, with nitrous oxide used only as an inhalational agent for maintaining anesthesia. |
| PGx | Šanjug_2023 | not_relevant | 3 | 4 | The study investigates the association between the COMT gene polymorphism and pain perception/anxiety in the context of nitrous oxide administration, but it does not measure pharmacokinetic parameters or demonstrate a direct pharmacodynamic effect of the gene on the drug's specific pharmacological action. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:16 UTC</sub>
