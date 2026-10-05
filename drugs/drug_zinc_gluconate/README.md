<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;zinc gluconate&quot;}]"></div>

# zinc gluconate

- **generic name:** zinc gluconate
- **ATC codes:** `A12CB02`
- **DrugBank:** [DB11248](https://go.drugbank.com/drugs/DB11248) · **PubChem:** [CID 443445](https://pubchem.ncbi.nlm.nih.gov/compound/443445)
- **molar mass:** 455.67 g/mol (C12H22O14Zn) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Zinc gluconate is a zinc supplement used for the common cold. It is an approved mineral supplement, also vet-approved, and is used widely as an over-the-counter product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3822815](https://www.wikidata.org/wiki/Q3822815) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:15 | 4:40 | 0/0/0 | 0/0/0 | 0/0/0 | 164,897/5,451 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/13 | 11/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zinc_gluconate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 989 matched, 89 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siepmann_2005.pdf` | Siepmann M et al., The pharmacokinetics of zinc from zinc…, International journal of cl… (2005) | popPK | 8 | [10.5414/cpp43562](https://doi.org/10.5414/cpp43562) | [16372518](https://pubmed.ncbi.nlm.nih.gov/16372518) | The study reports quantitative PK parameters (Cmax, AUC, Tmax) for zinc gluconate in humans, but specific clearance or volume values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05T10:14:46.885069+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinleye_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of an MMP-2 inhibitory peptide fusion protein, not zinc gluconate. |
| popPK | Ali_2026 | irrelevant | 0 | 0 | The paper is a review of radiolabeled nanoparticles (ZnO, iron oxide, gold) for cancer therapy and does not report pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Alnajar_2021 | irrelevant | 0 | 0 | The study investigates the toxicological effects of microplastics on mussels and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Alobaid_2025 | irrelevant | 0 | 0 | The paper describes the antimicrobial activity of a silver-zinc nanozeolite wound dressing in an in vitro biofilm model and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Araujo-Lima_2017 | irrelevant | 1 | 0 | The study uses in vitro and in silico approaches to evaluate toxicology and mutagenicity, not in vivo pharmacokinetic disposition parameters (CL, V, t1/2) for zinc gluconate. |
| popPK | Aubeux_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydrocortisone acetate released from a zinc oxide eugenol sealer, not the drug zinc gluconate. |
| popPK | Babcock_1982 | irrelevant | 2 | 0 | The study uses zinc sulfate (ZnSO4) and radioactive zinc (Zn-65) rather than zinc gluconate, and no specific numeric PK parameters are provided in the text. |
| popPK | Bauer_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ciliary beat frequency and PKC activity, not a pharmacokinetic study reporting disposition parameters for zinc gluconate. |
| popPK | Bayati_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of copper/zinc superoxide dismutase (SOD), not zinc gluconate. |
| popPK | Bolatimi_2023 | irrelevant | 0 | 0 | The study is a mechanistic/therapeutic investigation of zinc supplementation in a disease model and does not report pharmacokinetic parameters (CL, V, ka, etc.) for zinc gluconate. |
| popPK | Bremner_1977 | irrelevant | 0 | 0 | The study investigates urinary zinc excretion in relation to thyroid status and does not report pharmacokinetic parameters (CL, V, ka, etc.) for zinc gluconate. |
| popPK | Cai_2026 | irrelevant | 0 | 0 | The paper describes a zinc nanoparticle formulation for cancer therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Chaplygina_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial dynamics in mouse cell cultures using exogenous zinc, not a pharmacokinetic study of zinc gluconate. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on oyster-derived zinc, with zinc gluconate serving only as a comparator in in-vitro bioavailability assays and in-vivo efficacy tests, without reporting specific PK parameters (CL, V, ka) for zinc gluconate. |
| popPK | Chowdhury_2021 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on inflammasome activation and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Colozza_2021 | irrelevant | 0 | 0 | The paper is a review of molecular biology mechanisms (WNT signaling, ubiquitination) and does not contain any pharmacokinetic data for zinc gluconate. |
| popPK | Daniel_2024 | irrelevant | 0 | 0 | The study investigates the in vitro antifungal activity of zinc oxide nanoparticles, not the pharmacokinetics of zinc gluconate. |
| popPK | Davidson_2010 | irrelevant | 0 | 0 | The paper is a causality analysis regarding zinc-induced anosmia and does not report any pharmacokinetic parameters. |
| PD | Davidson_2010 | not_relevant | 1 | 0 | The paper is a qualitative causality analysis using Bradford Hill criteria and does not report any numeric pharmacodynamic parameters or concentration-effect curves. |
| popPK | Eby_2006 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of zinc gluconate for cold treatment and reports no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Eby_2006 | not_relevant | 1 | 0 | The paper reports a clinical trial with binary outcomes (asymptomatic status) and no concentration-effect or dose-response modeling with numeric PD parameters. |
| popPK | Gao_2010 | irrelevant | 0 | 0 | The paper focuses on the SAR of MMP-13 inhibitors, not the pharmacokinetics of zinc gluconate. |
| popPK | Gholamalizadeh_2023 | irrelevant | 0 | 0 | The paper is a systematic review of dietary supplements in cervical cancer and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Giallourou_2018 | irrelevant | 0 | 0 | The paper describes a mouse model of Campylobacter jejuni infection and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Gilbert_1987 | irrelevant | 1 | 0 | The study measures salivary concentrations and oral retention of zinc from a dentifrice, not systemic pharmacokinetic parameters (CL, V, ka) for zinc gluconate. |
| popPK | Gudgin_1995 | irrelevant | 0 | 0 | The study investigates zinc(II) phthalocyanine (ZnPc), not zinc gluconate, and focuses on fluorescence artifacts rather than quantitative PK parameters for the target drug. |
| popPK | Guillard_1984 | irrelevant | 0 | 0 | The study investigates zinc sulfate and zinc pantothenate, not zinc gluconate. |
| popPK | He_2022 | irrelevant | 0 | 0 | The paper focuses on virtual screening for tuberculosis drug candidates (mtbDHFR inhibitors) and does not involve the pharmacokinetics of zinc_gluconate. |
| popPK | Houston_2017 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation of antiviral activity and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Ilosvai_2023 | irrelevant | 0 | 0 | The study investigates zinc ferrite nanoparticles as MRI contrast agents, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Isele_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zinc phthalocyanine (ZnPc), not zinc gluconate. |
| popPK | Jain_2025 | irrelevant | 0 | 0 | The paper is a review of zinc oxide (ZnO) nanoparticles, not zinc gluconate, and contains no original quantitative PK parameters. |
| popPK | Janniger_2017 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of a topical nitric-zinc preparation for warts and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Jebahi_2025 | irrelevant | 0 | 0 | The study focuses on zinc oxide nanoparticles (ZnONPs), not the drug zinc gluconate, and the pharmacokinetics mentioned are likely in-silico predictions for phytochemicals rather than quantitative disposition parameters for the subject drug. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of zinc oxide nanoparticles in a Drosophila model of Parkinson's disease, not the pharmacokinetics of zinc gluconate. |
| popPK | Khadem_2025 | irrelevant | 0 | 0 | The paper is an in-silico study identifying novel inhibitors for the enzyme cis-aconitate decarboxylase (CAD) and does not investigate the pharmacokinetics of zinc gluconate. |
| popPK | Kidd_1994 | irrelevant | 0 | 0 | The study investigates the immunological effects of zinc-methionine on Salmonella clearance in turkeys, not the pharmacokinetic parameters of zinc gluconate. |
| popPK | Konduru_2014 | irrelevant | 0 | 0 | The study investigates zinc oxide nanoparticles (ZnO NPs), not the drug zinc gluconate. |
| popPK | Kong_2021 | irrelevant | 0 | 0 | The paper studies immunomodulatory drugs (thalidomide, lenalidomide, etc.) and does not involve zinc_gluconate. |
| popPK | Krausová_1990 | irrelevant | 0 | 0 | The study investigates zinc metabolism in diabetic patients but does not report pharmacokinetic parameters (CL, V, ka) for the specific drug zinc gluconate. |
| popPK | Kroll_1991 | irrelevant | 0 | 0 | The paper describes the molecular biology of copper-zinc superoxide dismutase in bacteria, not the pharmacokinetics of zinc gluconate. |
| popPK | Li_1995 | irrelevant | 0 | 0 | The study investigates zinc acexamate, not zinc gluconate. |
| popPK | Lin_2015 | irrelevant | 0 | 0 | The paper is a review of metallic nanoparticles (gold, silver, zinc oxide) and does not report pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper describes zinc ferrite nanoclusters for bioimaging, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Merali_1976 | irrelevant | 0 | 0 | The study investigates the protective effects of zinc chloride on cadmium-induced toxicity in rats and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Muroi_2015 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of the fungicide ziram on protein degradation in macrophages and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Nawaz_2021 | irrelevant | 0 | 0 | The study investigates zinc oxide nanoparticles (ZnONPs) for bilirubin photolysis, not the pharmacokinetics of zinc gluconate. |
| popPK | Neyrolles_2021 | irrelevant | 0 | 0 | The paper is a commentary on the mechanism of zinc toxicity in macrophages and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Nishiyama_1994 | irrelevant | 0 | 0 | The study investigates the effect of zinc supplementation on thyroid hormone metabolism and does not report pharmacokinetic parameters (CL, V, ka, etc.) for zinc gluconate. |
| popPK | ORourke_1972 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Opoka_2010 | irrelevant | 0 | 0 | The study investigates the mechanism of gastric ulcer healing using zinc hydroaspartate, not the pharmacokinetics of zinc gluconate. |
| popPK | Pakrashi_1995 | irrelevant | 0 | 0 | The study investigates the effect of tobacco on seminal fluid markers (including zinc) and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Pan_2021 | irrelevant | 0 | 0 | The paper investigates zinc oxide nanoparticles for cancer therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Pandranki_2018 | irrelevant | 0 | 0 | The study is a clinical evaluation of root canal filling materials (Zinc Oxide Eugenol) and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Pfrimer_2014 | irrelevant | 0 | 0 | The study measures urinary excretion of elemental zinc in healthy subjects, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Qureshi_2026 | irrelevant | 0 | 0 | The paper describes the mechanistic role of the HDAC6 Zinc Finger Ubiquitin-Binding domain in neuronal cells and contains no pharmacokinetic data for zinc gluconate. |
| popPK | Rawat_2023 | irrelevant | 0 | 0 | The study investigates the molecular interaction of taxifolin with human adenosine deaminase and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Read_2017 | irrelevant | 0 | 0 | The paper investigates the mechanistic role of zinc in inhibiting interferon signaling and viral clearance, not the pharmacokinetics of zinc gluconate. |
| popPK | Ripa_1995 | irrelevant | 0 | 0 | The paper is a review discussing zinc status in diabetes and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for zinc gluconate. |
| popPK | Rosmanith_1975 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Rubio_2007 | irrelevant | 1 | 0 | The paper is a general review of zinc as an element and does not report specific quantitative pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Russo_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zinc-mesoporphyrin, not zinc gluconate. |
| popPK | Saddik_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and wound-healing efficacy of azithromycin-loaded zinc oxide nanoparticles, not the pharmacokinetics of zinc gluconate. |
| popPK | Sadikot_2025 | irrelevant | 0 | 0 | The study investigates the mechanistic role of zinc in mitochondrial function and immune response in macrophages, not the pharmacokinetic disposition parameters of zinc gluconate. |
| popPK | Sanchez-Rosario_2026 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial investigation of metal-BMDC complexes against bacteria, not a pharmacokinetic study of zinc gluconate. |
| popPK | Sandstead_1995 | irrelevant | 0 | 0 | The paper is a review discussing toxicity and requirements of trace elements, not a pharmacokinetic study reporting quantitative disposition parameters for zinc gluconate. |
| popPK | Schuindt_2026 | irrelevant | 0 | 0 | The paper is a microbiology study on zinc resistance genes in Chromobacterium violaceum and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Scott_2021 | irrelevant | 0 | 0 | The paper describes a zinc finger protein for HIV-1 transcriptional activation and does not involve the drug zinc gluconate or its pharmacokinetics. |
| popPK | Siepmann_2005 | relevant | 8 | 4 | The study reports quantitative PK parameters (Cmax, AUC, Tmax) for zinc gluconate in humans, but specific clearance or volume values are not explicitly listed in the provided text. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The study investigates the molecular interaction of zinc oxide nanoparticles with a dye and protein in vitro, not the pharmacokinetics of zinc gluconate. |
| popPK | Siposova_2023 | irrelevant | 0 | 0 | The paper studies zeolite-dye composites for anti-amyloidogenic properties and does not involve zinc gluconate or its pharmacokinetics. |
| popPK | Slinko_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of zinc gluconate's effect on sepsis survival and inflammation in mice, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Staessen_1995 | irrelevant | 0 | 0 | The paper is an epidemiological study on lead exposure and renal function/blood pressure, not a pharmacokinetic study of zinc gluconate. |
| popPK | Sällsten_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mercury (Hg) and the effect of DMPS on its excretion, not the pharmacokinetics of zinc gluconate. |
| popPK | Takeda_2018 | irrelevant | 0 | 0 | The paper investigates the effect of zinc deficiency on ectoenzyme activity and ATP clearance, not the pharmacokinetics of zinc gluconate as a drug. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The study focuses on the radiolabeling of zinc sulfide quantum dots for PET imaging, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper describes a nanomedicine for atherosclerosis therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Wastney_1986 | irrelevant | 1 | 0 | The study investigates zinc metabolism using radioactive zinc (65Zn) rather than the specific drug formulation zinc gluconate, and no specific pharmacokinetic parameter values are provided in the text. |
| popPK | Xie_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of esomeprazole zinc, not zinc gluconate. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper describes a zinc-loureirin B nanozyme for osteoarthritis therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Xue_2026 | irrelevant | 0 | 0 | The paper studies zinc finger proteins in Arabidopsis plants and contains no pharmacokinetic data for zinc gluconate. |
| popPK | Yan_2021 | irrelevant | 0 | 0 | The study focuses on a zinc-coordinated microgel delivery system and reports PK parameters for a model drug (bovine serum albumin), not for zinc gluconate. |
| popPK | Youssef_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of intralesional zinc sulfate for warts, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The study investigates the neurotoxicity and behavioral effects of zinc chloride exposure in zebrafish, not the pharmacokinetics of zinc gluconate. |
| popPK | Zafar_2023 | irrelevant | 0 | 0 | The paper is a microbiology study on Streptococcus pneumoniae virulence and zinc homeostasis genes, not a pharmacokinetic study of zinc gluconate. |
| popPK | van_1994 | irrelevant | 0 | 0 | The study investigates zinc phthalocyanine (a photosensitizer), not zinc gluconate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
