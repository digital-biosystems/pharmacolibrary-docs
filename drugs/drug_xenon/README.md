<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;xenon&quot;}]"></div>

# xenon

- **generic name:** xenon
- **ATC codes:** `N01AX15`, `V04CX12`
- **DrugBank:** [DB13453](https://go.drugbank.com/drugs/DB13453) · **PubChem:** not captured
- **molar mass:** 131.293 g/mol (Xe) — DrugBank
- **groups:** investigational

## About

Xenon, a noble gas, has been used as an inhalational general anaesthetic and as a diagnostic agent. It remains an investigational anaesthetic rather than an established marketed drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1106](https://www.wikidata.org/wiki/Q1106) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:23 | 12:46 | 0/0/0 | 2/2/0 | 0/0/0 | 512,848/7,287 | einfracz / qwen3.8-27b | 23 | 2/17 | 23/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dinse_2005_membrane_current](drugs/drug_xenon/pd_Dinse_2005_membrane_current.md) | membrane current ← xenon · inhibition effect | — | Dinse A et al., Xenon reduces glutamate-, AMPA-, and ka…, British journal of anaesthe… (2005) | [10.1093/bja/aei080](https://doi.org/10.1093/bja/aei080) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Kligman_1991_insoluble_fraction_of_collagen](drugs/drug_xenon/pd_Kligman_1991_insoluble_fraction_of_collagen.md) | insoluble fraction of collagen ← xenon · stimulation effect | — | Kligman LH et al., Biochemical changes in hairless mouse s…, Photochemistry and photobio… (1991) | [10.1111/j.1751-1097.1991.tb02011.x](https://doi.org/10.1111/j.1751-1097.1991.tb02011.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [EFSA_2026_none](drugs/drug_xenon/pd_EFSA_2026_none.md) | none ← none · model not identified | — | EFSA Panel on Food Additives and Flavourings (FAF) et al., Re-evaluation of sucralose (E 955) as a…, EFSA journal. European Food… (2026) | [10.2903/j.efsa.2026.9854](https://doi.org/10.2903/j.efsa.2026.9854) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Uchida_2022_PS](drugs/drug_xenon/pd_Uchida_2022_PS.md) | steady-state response ratio ← Xenon · direct sigmoid Emax (Hill) effect | — | Uchida T et al., Behavior of Stimulus Response Signals i…, Neuroscience (2022) | [10.1016/j.neuroscience.2022.05.027](https://doi.org/10.1016/j.neuroscience.2022.05.027) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 138 matched, 92 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kilian_2004.pdf` | Kilian W et al., Dynamic NMR spectroscopy of hyperpolari…, Magnetic resonance in medic… (2004) | popPK | 9 | [10.1002/mrm.10726](https://doi.org/10.1002/mrm.10726) | [15065259](https://pubmed.ncbi.nlm.nih.gov/15065259) | The study models xenon uptake in the brain but the abstract only reports qualitative observations (chemical shifts and relative T1 values) without providing specific quantitative PK parameter values (CL, V, etc.) in the evidence. |
| `Iliff_1974.pdf` | Iliff L et al., Effect of changes in cerebral blood flo…, Journal of neurology, neuro… (1974) | popPK | 8 | [10.1136/jnnp.37.6.631](https://doi.org/10.1136/jnnp.37.6.631) | [4844131](https://pubmed.ncbi.nlm.nih.gov/4844131) | The study uses xenon as a quantitative tracer to measure cerebral blood flow via compartmental analysis, but the extracted evidence contains methodological details rather than explicit numeric parameter values (like CL or V). |
| `Rezvani_1986.pdf` | Rezvani M et al., The validity of different methods of an…, International journal of ra… (1986) | popPK | 8 | [10.1016/0883-2897(86)90103-0](https://doi.org/10.1016/0883-2897(86)90103-0) | [3771258](https://pubmed.ncbi.nlm.nih.gov/3771258) | The paper proposes a two-compartmental pharmacokinetic model for xenon clearance in pigs, but the provided text contains no specific numeric parameter values (CL, V, Q) or data from the study. |
| `Novotny_1993.pdf` | Novotny JA et al., Contribution of tissue lipid to long xe…, Journal of applied physiolo… (1993) | popPK | 7 | [10.1152/jappl.1993.74.5.2127](https://doi.org/10.1152/jappl.1993.74.5.2127) | [8335539](https://pubmed.ncbi.nlm.nih.gov/8335539) | The study reports xenon residence times in canine muscle, but the abstract contains no numeric parameter values. |

<sub>queue written 2026-10-07T05:22:35.032506+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alam_2026 | irrelevant | 0 | 0 | Xenon is used as a hyperpolarized gas for MRI imaging (a diagnostic agent), not as a therapeutic drug subject to pharmacokinetic modeling. |
| popPK | Andrade_2014 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of auranofin against Toxoplasma gondii and does not report pharmacokinetic parameters for xenon. |
| popPK | Baba_1979 | irrelevant | 2 | 2 | Xenon-133 is used here as a diagnostic radiotracer for cerebral blood flow measurement, not as a subject drug for PK modeling; the reported values are blood flow rates, not disposition parameters. |
| popPK | Barakat_2008 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EC50/EC95) for propofol in the presence of xenon, rather than quantitative pharmacokinetic parameters (CL, V, Ka) for xenon itself. |
| popPK | Baumert_2002 | irrelevant | 0 | 0 | The study investigates respiratory mechanics and airway resistance in pigs, not the pharmacokinetic disposition parameters (CL, V, t1/2) of xenon. |
| popPK | Brake_2024 | irrelevant | 0 | 0 | The paper is a neurophysiological study on EEG mechanisms using propofol and contains no pharmacokinetic data for xenon. |
| popPK | Butt_1983 | irrelevant | 0 | 0 | Xenon-133 is used here as a diagnostic tracer to measure renal blood flow, not as the subject drug for which PK parameters are being determined. |
| popPK | Carlin_1977 | irrelevant | 4 | 5 | Study reports in vitro partition coefficients (tissue/blood ratios) rather than time-dependent disposition parameters (CL, V, half-life) required for population PK. |
| popPK | Cascino_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diazepam nasal spray, not xenon. |
| popPK | Cekanova_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of fluorocoxib A in dogs, not xenon. |
| popPK | Choquet_2003 | irrelevant | 0 | 0 | The study measures the magnetic relaxation time (T1) of hyperpolarized xenon in rat brain tissue for MRI quantification, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for xenon as a systemic drug. |
| popPK | Cinotti_1991 | irrelevant | 2 | 1 | The study models regional pulmonary ventilation using Xe-127 as a diagnostic tracer rather than reporting systemic pharmacokinetic parameters (CL, V, ka) for xenon as a therapeutic drug. |
| popPK | Daniels_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the effects of anesthetics on glycine receptors, reporting no pharmacokinetic parameters for xenon. |
| popPK | Devroe_2021 | irrelevant | 0 | 0 | The study investigates neurodevelopmental outcomes and neurohistology, not pharmacokinetic parameters like clearance or volume for xenon. |
| popPK | Dinse_2005 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study investigating xenon's mechanism of action on glutamate receptors, not a pharmacokinetic study. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper is a safety assessment of sucralose, a completely different substance from xenon, and contains no pharmacokinetic data for xenon. |
| popPK | Eger_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of action (NMDA receptor involvement) on the Minimum Alveolar Concentration (MAC) of xenon, not its pharmacokinetic disposition parameters (clearance, volume, etc.). |
| popPK | Fixley_1978 | irrelevant | 0 | 0 | The study uses xenon-133 as a diagnostic tracer to measure lung regional distribution and mechanics, not to determine pharmacokinetic disposition parameters. |
| popPK | Franco_2022 | irrelevant | 0 | 0 | The paper describes an analytical method for cannabidiol, not xenon. |
| popPK | Friedrich_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for evacetrapib, not xenon. |
| popPK | Gherase_2006 | irrelevant | 0 | 0 | The paper reports physicochemical properties (droplet diameter, permeability) of a xenon-containing emulsion for MRI, not pharmacokinetic disposition parameters (CL, V, etc.) for xenon in a biological system. |
| popPK | Greisen_1984 | irrelevant | 3 | 9 | The study uses 133-Xenon as a diagnostic agent for cerebral blood flow and does not report xenon's systemic pharmacokinetic parameters (CL, V) but rather local clearance rate constants. |
| popPK | Heikkonen_1987 | irrelevant | 2 | 2 | Study measures tumor blood perfusion and partition coefficients using xenon as a tracer, not systemic pharmacokinetic parameters (CL, Vd, T1/2). |
| PGx | Hemnes_2020 | not_relevant | 0 | 0 | The paper is a review on biomarkers in pulmonary arterial hypertension and mentions Xenon MRI only as an imaging modality; it does not report pharmacogenomic effects on xenon PK or PD parameters. |
| popPK | Henry_2025 | irrelevant | 0 | 0 | The paper is a review of graphical representation in epilepsy medication trials and does not contain any pharmacokinetic data or studies involving xenon. |
| popPK | Honda_1989 | irrelevant | 1 | 0 | The study uses Xe-133 as a diagnostic imaging agent to assess lung ventilation, rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for xenon as the subject drug. |
| popPK | Iakab_2026 | irrelevant | 0 | 0 | The paper describes a 3D MALDI imaging platform for spatial metabolomics in cancer models and does not report any pharmacokinetic parameters for xenon. |
| popPK | Iliff_1974 | relevant | 8 | 3 | The study uses xenon as a quantitative tracer to measure cerebral blood flow via compartmental analysis, but the extracted evidence contains methodological details rather than explicit numeric parameter values (like CL or V). |
| popPK | Khanppnavar_2022 | irrelevant | 0 | 0 | The paper describes the structural basis of organic cation transporter-3 (OCT3) inhibition using cryo-EM and does not report pharmacokinetic parameters for the drug xenon. |
| popPK | Kilian_2004 | irrelevant | 9 | 0 | The study models xenon uptake in the brain but the abstract only reports qualitative observations (chemical shifts and relative T1 values) without providing specific quantitative PK parameter values (CL, V, etc.) in the evidence. |
| popPK | Kodaka_2006 | irrelevant | 0 | 0 | The study concerns the metabolism of the fungicide uniconazole-P, where xenon is only a light source (lamp), not the subject drug. |
| popPK | Konstantopoulos_2022 | irrelevant | 0 | 0 | The paper is a review on machine learning in nanomaterials manufacturing and does not contain any pharmacokinetic data for xenon. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The paper is about in silico pharmacophore modeling for blood-brain barrier permeation and mentions "xenon" only as a computer processor brand (Intel Xenon) and removes the element Xenon (Xe) from a dataset; it contains no pharmacokinetic data for the drug xenon. |
| popPK | Kuprat_2025 | irrelevant | 0 | 0 | The paper is a review of computational fluid dynamics (CFD) and aerosol dosimetry modeling and does not report any pharmacokinetic parameters for xenon. |
| popPK | Laurent_1982 | irrelevant | 1 | 1 | Xenon-133 is used as a diagnostic tracer to measure cerebral blood flow, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | Lavini_2000 | irrelevant | 1 | 0 | The paper is a theoretical simulation of a compartmental model for intravenous delivery, lacking original experimental quantitative PK parameters (CL, V, etc.) for the xenon subject. |
| popPK | Lin_1999 | irrelevant | 0 | 0 | The paper investigates the photodegradation toxicity of herbicides using a Xenon-arc lamp as a light source; xenon is not the subject drug and no pharmacokinetic parameters are reported. |
| popPK | Madders_2025 | irrelevant | 0 | 0 | The paper studies cardiac β-adrenergic receptor signaling in rat myocytes using isoprenaline and PEGylated isoprenaline, not the pharmacokinetics of xenon. |
| popPK | Mahmoud_2020 | irrelevant | 0 | 0 | The paper is a review of dexmedetomidine pharmacokinetics and does not report any data for xenon. |
| popPK | Marc-Vergnes_1980 | irrelevant | 0 | 0 | Xenon-133 is used as a diagnostic tracer for cerebral blood flow, not as a therapeutic drug for PK parameter extraction. |
| popPK | Martin_1997 | irrelevant | 2 | 0 | The paper presents a theoretical model for hyperpolarized xenon signal intensity in MRI, reporting specific T1 relaxation times and estimated concentrations rather than standard quantitative disposition parameters like clearance or volume of distribution. |
| popPK | McGuigan_2021 | irrelevant | 0 | 0 | The study investigates electroencephalogram (EEG) spectral features under xenon anesthesia and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Meric_1979 | relevant | 3 | 0 | The study uses Xenon-133 for cerebral blood flow measurement and describes a two-compartmental analysis, but the primary output is CBF, and no specific PK parameter values (CL, V, etc.) for Xenon itself are provided in the evidence. |
| popPK | Miao_2018 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study evaluating the neuroprotective efficacy of xenon-delivery liposomes in a subarachnoid hemorrhage animal model, but it does not report quantitative pharmacokinetic parameters (clearance, volume, half-life, or compartmental models) for xenon itself. |
| popPK | Miraldi_1992 | irrelevant | 0 | 0 | Xenon-133 is used here as a diagnostic radioisotope probe to measure penile blood flow, not as the subject drug for pharmacokinetic analysis. |
| popPK | Mäntylä_1988 | irrelevant | 0 | 0 | The study uses xenon as a radiotracer to measure regional blood flow in human tumours, rather than characterizing the pharmacokinetic disposition parameters (clearance, volume, etc.) of xenon as a subject drug. |
| popPK | Nagele_2005 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of xenon (glutamate receptor interaction) in C. elegans and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Novotny_1993 | relevant | 7 | 1 | The study reports xenon residence times in canine muscle, but the abstract contains no numeric parameter values. |
| popPK | Obrist_1975 | irrelevant | 0 | 0 | The study uses xenon-133 as a diagnostic tracer to measure cerebral blood flow, not as the subject drug for which pharmacokinetic disposition parameters are being characterized. |
| popPK | Odano_1999 | irrelevant | 0 | 0 | Xenon is used only as a diagnostic comparator agent (133Xe inhalation SPET) for cerebral blood flow, and no pharmacokinetic parameters (CL, V, ka, etc.) for xenon are reported. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on bioactive compounds from marine by-products for cosmetics and does not contain any pharmacokinetic data for xenon. |
| popPK | Pinborg_2002 | irrelevant | 0 | 0 | Xenon-133 is used only as a diagnostic tracer for cerebral blood flow, not as the subject drug for pharmacokinetic parameter extraction. |
| popPK | Rezvani_1986 | relevant | 8 | 2 | The paper proposes a two-compartmental pharmacokinetic model for xenon clearance in pigs, but the provided text contains no specific numeric parameter values (CL, V, Q) or data from the study. |
| popPK | Thaler_1982 | irrelevant | 2 | 0 | The study is a simulation of xenon CT data for cerebral blood flow measurement and does not report quantitative disposition parameters (CL, V, ka) for xenon as a drug. |
| popPK | Uchida_2022 | irrelevant | 0 | 0 | This is an in-vitro study on neuronal signal transmission using multi-electrode arrays; it reports electrophysiological parameters (response time, ratio) rather than pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and contains no pharmacokinetic data for xenon. |
| popPK | Younkin_1982 | irrelevant | 2 | 0 | The study uses Xenon-133 as a diagnostic tracer to measure cerebral blood flow, not as a subject drug for pharmacokinetic parameter estimation (CL, V, Q, ka), and no PK values for xenon are reported. |
| popPK | Younkin_1987 | irrelevant | 1 | 0 | The study uses xenon-133 as a diagnostic tracer to measure cerebral blood flow, not to report the pharmacokinetic disposition parameters of xenon itself. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper studies the synthesis and antifungal efficacy of silver nanoparticles, using xenon only as a light source for synthesis, and contains no pharmacokinetic data. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study evaluates the potency of topical corticosteroids using the Vasoconstrictor Assay, where xenon is only used as a light source in the chromameter and is not the subject drug. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper describes Xenon only as a gas loaded into lipid-shelled microbubbles for delivery (in vitro/acoustic studies), containing no pharmacokinetic disposition parameters (CL, V, t1/2) for Xenon itself. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
