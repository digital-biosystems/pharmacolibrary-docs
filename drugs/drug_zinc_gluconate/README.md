<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;zinc gluconate&quot;}]"></div>

# zinc gluconate

- **generic name:** zinc gluconate
- **ATC codes:** `A12CB02`
- **DrugBank:** [DB11248](https://go.drugbank.com/drugs/DB11248) · **PubChem:** [CID 443445](https://pubchem.ncbi.nlm.nih.gov/compound/443445)
- **molar mass:** 455.67 g/mol (C12H22O14Zn) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Zinc gluconate is a zinc salt of gluconic acid comprised of two gluconic acid molecules for each zinc cation (2+). Zinc gluconate is a generally recognized as safe (GRAS) substance by FDA [L2081]. It is available as a trace mineral supplement and over the counter as a lozenge form for a reduced duration of common colds and with decreased symptom severity.

Although it has been nasally administered for treating the common cold, this route of administration has been associated with some cases of anosmia [A32414], [A32409], [A32410], [L2080].

Studies show that zinc may be better absorbed in humans in the gluconate form [A32412], [L2105], however, results from other studies may vary.[A27280, L2082]

Interestingly, zinc supplementation has become a critical intervention for treating diarrheal episodes in children. Studies suggest that administration of zinc along with new low osmolarity oral rehydration solutions/salts (oral rehydration solution), may reduce both the duration and severity of diarrheal episodes for up to 12 weeks [L422].

More information about Zinc (in its natural form) is available at [DB01593].

**Indication.** Zinc gluconate is mainly indicated in conditions like zinc deficiency, and can also be administered in adjunctive therapy as an alternative drug of choice in diarrhea [L2088].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 01:50 | 8:33 | 0/0/0 | 0/2/0 | 0/0/0 | 51,568/1,961 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/13 | 11/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_EPO](drugs/drug_zinc_gluconate/pd_Chen_2026_EPO.md) | plasma erythropoietin ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_RBC](drugs/drug_zinc_gluconate/pd_Chen_2026_RBC.md) | red blood cell count ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Houston_2017_EC50](drugs/drug_zinc_gluconate/pd_Houston_2017_EC50.md) | antiviral plaque reduction (EC50 response) ← pomegranate rind extract (PRE) · inhibition effect | — | Houston DMJ et al., Potentiated virucidal activity of pomeg…, PloS one (2017) | [10.1371/journal.pone.0179291](https://doi.org/10.1371/journal.pone.0179291) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Houston_2017_MTS](drugs/drug_zinc_gluconate/pd_Houston_2017_MTS.md) | viable cell percentage (MTS assay) ← pomegranate rind extract (PRE) · inhibition effect | — | Houston DMJ et al., Potentiated virucidal activity of pomeg…, PloS one (2017) | [10.1371/journal.pone.0179291](https://doi.org/10.1371/journal.pone.0179291) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Houston_2017_log_reduction](drugs/drug_zinc_gluconate/pd_Houston_2017_log_reduction.md) | virucidal log reduction of HSV-1 ← pomegranate rind extract (PRE) · inhibition effect | — | Houston DMJ et al., Potentiated virucidal activity of pomeg…, PloS one (2017) | [10.1371/journal.pone.0179291](https://doi.org/10.1371/journal.pone.0179291) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zinc_gluconate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…Feces…”</sub> | prose |
| excretion | kidney | <sub>“…urine…”</sub> | prose |

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
| `Siepmann_2005.pdf` | Siepmann M et al., The pharmacokinetics of zinc from zinc…, International journal of cl… (2005) | popPK | 8 | [10.5414/cpp43562](https://doi.org/10.5414/cpp43562) | [16372518](https://pubmed.ncbi.nlm.nih.gov/16372518) | The study reports PK parameters (Cmax, AUC) for zinc gluconate, but only as relative differences compared to zinc oxide, lacking absolute numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-09-30T01:50:07.401013+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinleye_2025 | irrelevant | 0 | 0 | The study focuses on a matrix metalloproteinase-2 inhibitory peptide fused to elastin-like polypeptide, not zinc_gluconate. |
| popPK | Ali_2026 | irrelevant | 0 | 0 | The paper is a review of radiolabelled nanoparticles (ZnO, iron oxide, gold) for cancer therapy and does not report pharmacokinetic parameters for the drug zinc_gluconate. |
| popPK | Alnajar_2021 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on microplastics in mussels, not a pharmacokinetic study of zinc gluconate. |
| popPK | Alobaid_2025 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on wound dressings and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Araujo-Lima_2017 | irrelevant | 1 | 0 | The study is explicitly in vitro and in silico, lacking in vivo quantitative disposition parameters (CL, V, etc.) for zinc gluconate. |
| popPK | Aubeux_2020 | irrelevant | 0 | 0 | The study investigates the release of hydrocortisone acetate from a zinc oxide eugenol sealer, not the pharmacokinetics of zinc gluconate. |
| popPK | Babcock_1982 | irrelevant | 2 | 0 | The study uses zinc sulfate (ZnSO4) for loading and zinc-65 for tracing, not zinc gluconate, and no specific numeric PK parameters are provided in the text. |
| popPK | Bauer_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ciliary function and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Bayati_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of copper/zinc superoxide dismutase (SOD), not zinc gluconate. |
| popPK | Bolatimi_2023 | irrelevant | 0 | 0 | The study is a mechanistic in vivo investigation of zinc supplementation's therapeutic effects on NAFLD in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for zinc gluconate. |
| popPK | Bremner_1977 | irrelevant | 0 | 0 | The paper discusses urinary zinc excretion in thyrotoxicosis but does not report pharmacokinetic parameters (CL, V, ka, etc.) for zinc gluconate. |
| popPK | Cai_2026 | irrelevant | 0 | 0 | The paper describes a zinc nanoparticle for cancer therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Chaplygina_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial dynamics in cell cultures, not a pharmacokinetic study, and does not report any disposition parameters for zinc gluconate. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on bioavailability and anti-anemic efficacy in rats and Caco-2 cells, reporting absorption percentages rather than pharmacokinetic parameters (CL, V, ka) for zinc gluconate, which is used only as a comparator. |
| popPK | Chowdhury_2021 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on inflammasome activation and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Colozza_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on WNT signaling and ubiquitination, not a pharmacokinetic study of zinc gluconate. |
| popPK | Daniel_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antifungal activity of zinc oxide nanoparticles, not a pharmacokinetic study of zinc gluconate. |
| popPK | Davidson_2010 | irrelevant | 0 | 0 | The paper is a causality analysis regarding zinc-induced anosmia and does not report any pharmacokinetic parameters. |
| PD | Davidson_2010 | not_relevant | 1 | 0 | The paper is a qualitative causality analysis using Bradford Hill criteria and does not report any numeric pharmacodynamic parameters or concentration-effect curves. |
| popPK | Eby_2006 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for common cold treatment and does not report any pharmacokinetic parameters for zinc gluconate. |
| PD | Eby_2006 | not_relevant | 1 | 0 | The paper reports a clinical trial with binary outcomes (asymptomatic status) and no concentration-effect or dose-response modeling with numeric PD parameters. |
| popPK | Gao_2010 | irrelevant | 0 | 0 | The paper focuses on the SAR of MMP-13 inhibitors and does not report pharmacokinetic parameters for zinc_gluconate. |
| popPK | Gholamalizadeh_2023 | irrelevant | 0 | 0 | The paper is a systematic review of dietary supplements in cervical cancer and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Giallourou_2018 | irrelevant | 0 | 0 | The paper describes a mouse model of Campylobacter jejuni infection and does not report any pharmacokinetic parameters for zinc gluconate. |
| popPK | Gilbert_1987 | irrelevant | 1 | 0 | The study measures salivary concentrations of zinc from a dentifrice rather than systemic pharmacokinetic parameters (CL, V, ka) for zinc gluconate. |
| popPK | Gudgin_1995 | irrelevant | 0 | 0 | The study focuses on zinc(II) phthalocyanine (ZnPc), not zinc gluconate, and addresses fluorescence artifacts rather than reporting quantitative PK parameters for the target drug. |
| popPK | Guillard_1984 | irrelevant | 0 | 0 | The study investigates zinc sulfate and zinc pantothenate, not zinc gluconate. |
| popPK | He_2022 | irrelevant | 0 | 0 | The paper focuses on virtual screening for tuberculosis inhibitors and does not involve zinc_gluconate or report any pharmacokinetic parameters. |
| popPK | Houston_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where zinc gluconate is used as a co-administered agent to potentiate virucidal activity, not as a subject drug for pharmacokinetic analysis. |
| popPK | Ilosvai_2023 | irrelevant | 0 | 0 | The study focuses on zinc ferrite nanoparticles as MRI contrast agents, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Isele_1995 | irrelevant | 0 | 0 | The study investigates zinc phthalocyanine, not zinc gluconate. |
| popPK | Jain_2025 | irrelevant | 0 | 0 | The paper is a review of zinc oxide (ZnO) nanoparticles, not zinc gluconate, and does not report quantitative PK parameters for the target drug. |
| popPK | Janniger_2017 | irrelevant | 0 | 0 | The paper describes a clinical efficacy study for a topical nitric-zinc preparation for warts and contains no pharmacokinetic parameters or quantitative disposition data for zinc gluconate. |
| popPK | Jebahi_2025 | irrelevant | 0 | 0 | The study focuses on zinc oxide nanoparticles (ZnONPs), not zinc gluconate, and reports in-vitro/computational pharmacokinetics rather than quantitative disposition parameters for the target drug. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The study investigates zinc oxide nanoparticles for Parkinson's disease in Drosophila and does not involve zinc gluconate or pharmacokinetic parameter estimation. |
| popPK | Khadem_2025 | irrelevant | 0 | 0 | The paper is an in-silico study on Cis-aconitate decarboxylase inhibitors and does not involve zinc_gluconate or report any pharmacokinetic parameters for it. |
| popPK | Kidd_1994 | irrelevant | 0 | 0 | The study investigates the immunological effects of zinc-methionine on phagocytic function in turkeys, not the pharmacokinetic disposition parameters of zinc gluconate. |
| popPK | Konduru_2014 | irrelevant | 2 | 3 | The study investigates zinc oxide nanoparticles (ZnO NPs), not the specific drug zinc gluconate, and reports nanoparticle clearance kinetics rather than standard pharmacokinetic parameters for the drug. |
| popPK | Kong_2021 | irrelevant | 0 | 0 | The paper studies immunomodulatory drugs (thalidomide, lenalidomide, etc.) and does not report pharmacokinetic parameters for zinc_gluconate. |
| popPK | Krausová_1990 | irrelevant | 0 | 0 | The study investigates zinc metabolism in diabetes but does not report pharmacokinetic parameters (CL, V, ka) for zinc gluconate as a drug. |
| popPK | Kroll_1991 | irrelevant | 0 | 0 | The paper describes the molecular biology of copper-zinc superoxide dismutase in bacteria and contains no pharmacokinetic data for zinc gluconate. |
| popPK | Li_1995 | irrelevant | 0 | 0 | The study investigates zinc acexamate, not zinc gluconate. |
| popPK | Lin_2015 | irrelevant | 0 | 0 | The paper is a review of metallic nanoparticles (gold, silver, zinc oxide) and does not report pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper studies zinc ferrite nanoclusters for bioimaging, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Merali_1976 | irrelevant | 0 | 0 | The study investigates the protective effects of zinc chloride (ZnCl2) on cadmium-induced toxicity in rats and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Muroi_2015 | irrelevant | 0 | 0 | The paper studies the mechanistic effects of the fungicide ziram on protein degradation in macrophages and does not involve zinc_gluconate or pharmacokinetic parameters. |
| popPK | Nawaz_2021 | irrelevant | 0 | 0 | The study focuses on zinc oxide nanoparticles (ZnONPs) for bilirubin photolysis, not the pharmacokinetics of zinc gluconate. |
| popPK | Neyrolles_2021 | irrelevant | 0 | 0 | The paper is a commentary on zinc toxicity mechanisms in macrophages and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Nishiyama_1994 | irrelevant | 0 | 0 | The study investigates the effect of zinc sulphate (not zinc gluconate) on thyroid hormone metabolism and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | ORourke_1972 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Opoka_2010 | irrelevant | 0 | 0 | The study investigates the mechanism of gastric ulcer healing using zinc hydroaspartate, not the pharmacokinetics of zinc gluconate. |
| popPK | Pakrashi_1995 | irrelevant | 0 | 0 | The study investigates the effect of tobacco on seminal gland markers (including zinc levels) and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Pan_2021 | irrelevant | 0 | 0 | The paper investigates zinc oxide nanoparticles for cancer therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Pandranki_2018 | irrelevant | 0 | 0 | The paper is a clinical dental study comparing root canal filling materials (ZOE vs. Endoflas) and does not involve zinc gluconate or pharmacokinetic analysis. |
| popPK | Pfrimer_2014 | irrelevant | 0 | 0 | The study measures urinary excretion of zinc in healthy subjects but does not involve the administration of zinc gluconate or report pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Qureshi_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on HDAC6 and cytoskeletal dynamics, not a pharmacokinetic study of zinc gluconate. |
| popPK | Rawat_2023 | irrelevant | 0 | 0 | The paper studies taxifolin as an inhibitor of adenosine deaminase and does not report pharmacokinetic parameters for zinc_gluconate. |
| popPK | Read_2017 | irrelevant | 0 | 0 | The paper investigates the mechanistic role of zinc in inhibiting IFN-λ3 signaling and viral clearance, not the pharmacokinetics of zinc gluconate. |
| popPK | Ripa_1995 | irrelevant | 0 | 0 | The text is a qualitative review of zinc status in diabetes and does not report any quantitative pharmacokinetic parameters for zinc gluconate. |
| popPK | Rosmanith_1975 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Rubio_2007 | irrelevant | 2 | 0 | The paper is a general review of zinc as an element and does not report specific quantitative pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Russo_1995 | irrelevant | 0 | 0 | The study investigates zinc-mesoporphyrin, not zinc gluconate. |
| popPK | Saddik_2022 | irrelevant | 0 | 0 | The study focuses on azithromycin-loaded zinc oxide nanoparticles for wound healing and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Sadikot_2025 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on zinc's role in mitochondrial function and bacterial clearance, not a pharmacokinetic study reporting disposition parameters for zinc gluconate. |
| popPK | Sanchez-Rosario_2026 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study of BMDC combined with metals, not a pharmacokinetic study of zinc gluconate. |
| popPK | Sandstead_1995 | irrelevant | 0 | 0 | The paper is a review discussing toxicity and requirements of trace elements, not a pharmacokinetic study reporting quantitative disposition parameters for zinc gluconate. |
| popPK | Schuindt_2026 | irrelevant | 0 | 0 | The paper is a microbiology study on zinc resistance genes in bacteria, not a pharmacokinetic study of zinc gluconate. |
| popPK | Scott_2021 | irrelevant | 0 | 0 | The paper describes a recombinant zinc finger protein for HIV-1 transcriptional activation and contains no pharmacokinetic data for zinc gluconate. |
| popPK | Siepmann_2005 | relevant | 8 | 2 | The study reports PK parameters (Cmax, AUC) for zinc gluconate, but only as relative differences compared to zinc oxide, lacking absolute numeric values for clearance, volume, or half-life. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper studies zinc oxide nanoparticles (not zinc gluconate) in an in-vitro binding and cytotoxicity context, with no pharmacokinetic parameters reported. |
| popPK | Siposova_2023 | irrelevant | 0 | 0 | The paper studies zeolite-dye composites for anti-amyloidogenic properties and does not involve zinc_gluconate or pharmacokinetic parameter estimation. |
| popPK | Slinko_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of zinc gluconate's effect on inflammation and mortality in sepsis, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Staessen_1995 | irrelevant | 0 | 0 | The paper is an epidemiological study on lead exposure and renal function/blood pressure, not a pharmacokinetic study of zinc gluconate. |
| popPK | Sällsten_1994 | irrelevant | 0 | 0 | The study investigates mercury pharmacokinetics and the effect of DMPS on metal excretion, with zinc only measured as a secondary biomarker, not as the subject drug for PK parameter estimation. |
| popPK | Takeda_2018 | irrelevant | 0 | 0 | The paper investigates the effect of zinc deficiency on ectoenzyme activity and ATP clearance, not the pharmacokinetics of zinc gluconate as a drug. |
| popPK | Tang_2019 | irrelevant | 0 | 0 | The paper focuses on radiolabeling zinc sulfide quantum dots for PET imaging and does not report pharmacokinetic parameters for the drug zinc gluconate. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper describes a nanomedicine for atherosclerosis therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Wastney_1986 | irrelevant | 0 | 0 | The study investigates zinc metabolism using radioactive 65Zn tracers rather than the specific drug zinc_gluconate, and no pharmacokinetic parameters for zinc_gluconate are reported. |
| popPK | Xie_2008 | irrelevant | 0 | 0 | The study focuses on esomeprazole zinc, not zinc gluconate, and does not report PK parameters for the target drug. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper describes a zinc-loureirin B nanozyme for osteoarthritis therapy and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Xue_2026 | irrelevant | 0 | 0 | The paper is a molecular biology study on zinc finger proteins in Arabidopsis and does not involve the drug zinc gluconate or pharmacokinetics. |
| popPK | Yan_2021 | irrelevant | 0 | 0 | The study focuses on a zinc-ion-coordinated microgel delivery system for BSA, not the pharmacokinetics of the drug zinc gluconate. |
| popPK | Youssef_2023 | irrelevant | 0 | 0 | The paper is a clinical trial comparing the efficacy of intralesional zinc sulfate (not zinc gluconate) for treating warts and reports no pharmacokinetic parameters. |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The study investigates the neurotoxic effects of zinc chloride exposure in zebrafish and does not report pharmacokinetic parameters for zinc gluconate. |
| popPK | Zafar_2023 | irrelevant | 0 | 0 | The paper is a microbiology study on Streptococcus pneumoniae virulence and zinc homeostasis, not a pharmacokinetic study of zinc gluconate. |
| popPK | van_1994 | irrelevant | 0 | 0 | The study investigates zinc phthalocyanine, not zinc gluconate, and focuses on fluorescence kinetics rather than standard PK parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
