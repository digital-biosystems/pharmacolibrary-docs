<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;dextran&quot;}]"></div>

# dextran

- **generic name:** dextran
- **ATC codes:** `B05AA05`
- **DrugBank:** [DB09255](https://go.drugbank.com/drugs/DB09255) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Dextran, a glucose polymer, is used as a plasma substitute and as an anticoagulant. It is an approved medicine, also approved for veterinary use, and some forms remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423123](https://www.wikidata.org/wiki/Q423123) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 04:15 | 7:44 | 0/1/0 | 0/0/0 | 0/0/0 | 135,082/15,040 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 1/17 | 18/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1981_reference](drugs/drug_dextran/Dextran_Schwarz1981_reference.md) | — | 1-compartment (no model) | 4 | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dextran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 240 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schwarz_1981.pdf` | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | popPK | 10 | not captured | [6171533](https://pubmed.ncbi.nlm.nih.gov/6171533) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, renal clearance, total clearance) for dextran 1 in human volunteers. |
| `Futaki_2023.pdf` | Futaki M et al., Effects of Intradermal Administration V…, Pharmaceutical research (2023) | popPK | 8 | [10.1007/s11095-023-03529-6](https://doi.org/10.1007/s11095-023-03529-6) | [37165148](https://pubmed.ncbi.nlm.nih.gov/37165148) | The study reports pharmacokinetic parameters (absorption rates, clearance, etc.) for dextran (FD-4) in a compartmental model, but the specific numeric values are not present in the provided abstract text. |
| `Gerstin_1992.pdf` | Gerstin EH et al., Heparin, dextran and trypan blue allost…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1281880](https://www.ncbi.nlm.nih.gov/pubmed/1281880) | metadata signals extractable PD data (EC50) |
| `Wehl_2026.pdf` | Wehl I et al., Characterization of human intestinal or…, Drug metabolism and disposi… (2026) | pgx | 7 | [10.1016/j.dmd.2026.100308](https://doi.org/10.1016/j.dmd.2026.100308) | [42190309](https://www.ncbi.nlm.nih.gov/pubmed/42190309) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yang_2024.pdf` | Yang Y et al., Circadian time-dependent effects of exp…, British journal of pharmaco… (2024) | pgx | 7 | [10.1111/bph.16440](https://doi.org/10.1111/bph.16440) | [38862812](https://www.ncbi.nlm.nih.gov/pubmed/38862812) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-05T21:48:11.942483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brambillasca_2024 | irrelevant | 0 | 0 | Dextran is used only as a fluorescent tracer (FITC-dextran) to measure macropinocytosis in an in-vitro screening, not as a subject drug for pharmacokinetic analysis. |
| PD | Brambillasca_2024 | not_relevant | 0 | 0 | The paper uses dextran as a fluorescent tracer to quantify macropinocytosis, not as a drug, and reports EC50 values for other small molecule inhibitors, not for dextran. |
| popPK | Brooks_2021 | irrelevant | 0 | 0 | Dextran is used as a diagnostic tracer to measure vascular permeability (Ktrans) in a murine leukemia model, not as the subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Carpentier_2024 | not_relevant | 0 | 0 | The paper discusses dextran as a component of a hydrogel matrix for organoid culture, not as a drug subject to pharmacogenomic analysis. |
| PGx | Chen_2011 | not_relevant | 0 | 0 | The paper investigates the effect of a methyl-deficient diet on DSS-induced colitis severity and inflammatory markers, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper describes the construction of artificial protocells using dextran derivatives as structural polyelectrolytes, not the pharmacokinetics of dextran as a drug. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for cancer therapy and does not report pharmacokinetic parameters for dextran. |
| PD | Eljack_2022 | not_relevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report specific pharmacodynamic or exposure-response data for dextran. |
| popPK | Engel_2014 | irrelevant | 0 | 0 | The study investigates the mechanism of Factor XII autoactivation using dextran sulfate as a surface activator, not the pharmacokinetics of dextran as a drug. |
| PGx | Foerster_2022 | not_relevant | 0 | 0 | The paper is a review on autophagy and intestinal barrier function; it does not report pharmacogenomic effects on the PK/PD of dextran. |
| popPK | Futaki_2023 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (absorption rates, clearance, etc.) for dextran (FD-4) in a compartmental model, but the specific numeric values are not present in the provided abstract text. |
| PGx | Gadaleta_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of an FGF19 analogue on intestinal inflammation and microbiota, not the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Gao_2017 | not_relevant | 0 | 0 | The paper investigates the effect of gut microbiota on CYP3A and P-gp expression in a colitis model, not the effect of a host gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Gao_2018 | not_relevant | 0 | 0 | The paper investigates the regulation of UGT1A1 expression by gut microbiota in a colitis model, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Gerstin_1992 | irrelevant | 0 | 0 | The study investigates the allosteric modulation of muscarinic receptors by dextran in rat heart homogenates, which is a mechanistic/pharmacodynamic study, not a pharmacokinetic study of dextran disposition. |
| PGx | Gu_2018 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a GLP-2 analog in a DSS-induced colitis model, not the pharmacokinetics or pharmacodynamics of dextran itself, nor any genetic influence on dextran handling. |
| PGx | Hirano_2026 | not_relevant | 0 | 0 | The paper studies the effect of osteopontin gene knockout on dextran sulfate sodium (DSS)-induced colitis, where DSS is a chemical irritant used to model disease, not a therapeutic drug subject to pharmacokinetic/pharmacodynamic analysis. |
| PGx | Hu_2020 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of omeprazole in a disease model (ulcerative colitis induced by dextran sulfate sodium), not the pharmacogenomics of dextran itself. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of paeonol, using dextran sulfate sodium (DSS) only as an agent to induce colitis, not as the subject drug for PK analysis. |
| PD | Jin_2016 | not_relevant | 0 | 0 | The paper studies paeonol and its metabolites, not dextran; dextran sulfate sodium (DSS) is only mentioned as an agent to induce colitis in the animal model, and no PD parameters for dextran are reported. |
| PGx | Kaczmarek_2024 | not_relevant | 0 | 0 | The paper studies the immunosuppressive properties of a cyclic tetrapeptide and uses dextran sulfate only as an irritant to induce colitis in a mouse model; it does not report pharmacogenomic effects on the PK or PD of dextran. |
| PGx | Kang_2020 | not_relevant | 0 | 0 | The paper investigates the role of the LACC1 gene in immune response and bacterial clearance, using dextran sodium sulfate only as a chemical inducer of colitis, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Kim_2023 | not_relevant | 0 | 0 | The paper investigates the use of indocyanine green (ICG) for imaging colon cancer and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Kincaid_1996 | irrelevant | 0 | 0 | The study uses dextran amine as a tracer for anatomical labeling in rat brains, not as a drug for pharmacokinetic analysis. |
| popPK | Kobuchi_2023 | irrelevant | 0 | 0 | Dextran sulfate sodium is used only as a chemical inducer of colitis in the rat model, not as the subject drug for pharmacokinetic analysis. |
| PD | Kobuchi_2023 | not_relevant | 4 | 2 | The paper describes a PK/PD model for uracil-tegafur (5-FU), not dextran; dextran sulfate sodium is only used as a vehicle/inducer for the cancer model. |
| PGx | Kong_2025 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a polysaccharide on dextran sulfate sodium-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper investigates the role of COMMD1 in colitis pathogenesis using dextran sodium sulfate as a disease inducer, not as a therapeutic drug, and does not report pharmacokinetic or pharmacodynamic parameters of dextran. |
| PGx | Liao_2025 | not_relevant | 0 | 0 | The paper studies the effect of tanshinone IIA on intestinal barrier integrity in sepsis, using dextran only as a permeability marker, and does not report pharmacogenomic effects on dextran PK/PD. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper studies the effect of imperatorin on dextran sulphate sodium-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself, and does not report pharmacogenomic effects. |
| PGx | Lloyd_2022 | not_relevant | 0 | 0 | The paper studies the effect of dextran on dopamine diffusion in a DAT knockout model, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Mao_2021 | not_relevant | 0 | 0 | The paper investigates the role of decorin deficiency in colon cancer metastasis using dextran sodium sulfate as a chemical inducer of colitis, not as a therapeutic drug subject to pharmacogenomic analysis. |
| popPK | McLaren_1993 | irrelevant | 0 | 0 | The study focuses on fluorescein kinetics, and dextran is used only as a reference molecule to determine bulk outflow, not as the subject of PK parameter estimation. |
| PGx | Mittapalli_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of dasatinib, and dextran is only used as a passive tracer to assess blood-brain barrier permeability, not as the drug of interest. |
| PGx | Morrison_2021 | not_relevant | 0 | 0 | The paper studies the effects of a plant extract on cancer models and CYP enzymes, but does not report pharmacogenomic effects on the PK/PD of dextran. |
| popPK | Naguib_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meperidine, using dextran 70 only as a vehicle/comparator, and does not report PK parameters for dextran itself. |
| popPK | Nomura_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitomycin C-dextran conjugates (a prodrug), not dextran itself as the subject drug. |
| PGx | Nopwinyoowong_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a natural product on CYP enzyme expression in a disease model, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Onishi_2018 | irrelevant | 0 | 0 | The study focuses on the control theory and anticancer activity of a dextran-paclitaxel conjugate in cells, not on the pharmacokinetic parameters of dextran itself. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The paper investigates the role of the IPMK gene in dextran sulfate sodium (DSS)-induced colitis, where dextran is a chemical irritant, not a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| popPK | Rajadhyaksha_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a protein therapeutic (scFv) delivered via hydrogels, where dextran is merely a polymer component of the delivery system, not the subject drug. |
| popPK | Ranta_2006 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic modeling for transscleral drug delivery using FITC-dextran as a tracer/probe, not a study of dextran's systemic disposition parameters. |
| PGx | Runwal_2025 | not_relevant | 0 | 0 | The paper investigates the effect of iron overload on blood-brain barrier proteins and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Rüdiger_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in podocytes, not a pharmacokinetic study of dextran disposition. |
| PGx | Schäfer_2023 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on inflammation models (DSS colitis, paw edema) and eicosanoid levels, not on the pharmacokinetic or pharmacodynamic parameters of the drug dextran. |
| PGx | Shimizu_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of eggshell membrane and its effects on DSS-induced colitis, but does not report any pharmacogenomic effects on the PK/PD of dextran. |
| PGx | Sliva_2012 | not_relevant | 0 | 0 | The paper studies the chemopreventive effects of a mushroom extract on colitis-associated carcinogenesis and does not report pharmacogenomic effects on the PK/PD of dextran. |
| PGx | Tschurtschenthaler_2017 | not_relevant | 0 | 0 | The paper investigates the role of ATG16L1 and IRE1α in Crohn's disease-like ileitis and does not report any pharmacokinetic or pharmacodynamic effects of dextran. |
| popPK | Tuvaanjav_2016 | irrelevant | 0 | 0 | The study focuses on the isolation and antiviral activity of polysaccharides from Cynomorium songaricum, using dextran sulfate only as a standard comparator for antiviral potency, not as a subject of pharmacokinetic analysis. |
| PD | Tuvaanjav_2016 | not_relevant | 3 | 2 | The paper reports a single EC50 value for dextran sulfate as a reference standard in an antiviral assay, but does not provide a dose-response curve, multiple data points, or a PK/PD model for dextran itself. |
| PGx | Vagnerová_2024 | not_relevant | 0 | 0 | The paper investigates the effect of butyrate on gene expression in mice and does not involve dextran or pharmacogenomics. |
| PGx | Vázquez-Arreguín_2019 | not_relevant | 0 | 0 | The paper investigates the role of the transcription factor Oct1 in colon regeneration and cancer, using dextran sodium sulfate (DSS) only as a chemical inducer of colitis, not as a drug subject to pharmacogenomic analysis. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of Yinhua Miyanling tablets on ulcerative colitis using DSS as a disease model, not the pharmacokinetics or pharmacodynamics of dextran itself, and contains no pharmacogenomic data. |
| PGx | Wehl_2026 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture model for drug metabolism and does not report any pharmacogenomic effects on dextran pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper studies the effect of isoliquiritigenin on gut microbiota and cancer incidence in a mouse model, not the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | Dextran is used only as an inflammatory agent (edema inducer) in a pharmacological screening study, not as the subject drug for PK analysis. |
| PD | Yamamoto_1991 | not_relevant | 0 | 0 | The paper studies a plant extract (Ageratum conyzoides), not the drug dextran; dextran is only mentioned as an irritant agent in an inflammation model. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The study investigates the effect of dextran sodium sulfate-induced colitis on theophylline pharmacokinetics, not the pharmacogenomics of dextran itself. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates the anti-inflammatory mechanism of patchouli alcohol in DSS-induced colitis and does not report pharmacogenomic effects on the PK or PD of dextran. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper discusses the structural modification of the enzyme dextransucrase to improve its stability, not the pharmacogenomics of dextran as a drug. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates butyrate metabolism in ulcerative colitis and uses dextran sulfate sodium (DSS) as a chemical inducer of colitis in mice, not as a therapeutic drug subject to pharmacogenomic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 21:48 UTC</sub>
