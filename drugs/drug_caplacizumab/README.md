<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;caplacizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caplacizumab_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caplacizumab/Caplacizumab_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# caplacizumab

- **generic name:** caplacizumab
- **ATC codes:** `B01AX07`
- **DrugBank:** [DB06081](https://go.drugbank.com/drugs/DB06081) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Caplacizumab, a monoclonal antibody antithrombotic, is used to treat acquired thrombotic thrombocytopenic purpura. It is authorised in the European Union and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5036030](https://www.wikidata.org/wiki/Q5036030) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:39 | 2:05 | 1/1/1 | 0/0/0 | 0/0/0 | 78,321/1,152 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/14 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Fan_2025_reference](drugs/drug_caplacizumab/Caplacizumab_Fan2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Fan X et al., Pharmacokinetic-pharmacodynamic modelin…, Microbiology spectrum (2025) | [10.1128/spectrum.00805-25](https://doi.org/10.1128/spectrum.00805-25) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Sargentini-Maier_2019_reference](drugs/drug_caplacizumab/Caplacizumab_SargentiniMaier2019_reference.md) | — | 1-compartment (no model) | 2 | Sargentini-Maier ML et al., Clinical pharmacology of caplacizumab f…, Expert review of clinical p… (2019) | [10.1080/17512433.2019.1607293](https://doi.org/10.1080/17512433.2019.1607293) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jansen_2026_reference](drugs/drug_caplacizumab/Caplacizumab_Jansen2026_reference.md) | — | 2-compartment (no model) | 3 | Jansen E et al., Characterization of the VHH-Fc construc…, PLoS medicine (2026) | [10.1371/journal.pmed.1004609](https://doi.org/10.1371/journal.pmed.1004609) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=caplacizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: VWF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 27 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartunek_2013 | irrelevant | 1 | 0 | The paper is a review of clinical studies and mechanism of action without reporting quantitative pharmacokinetic parameters or compartmental models for caplacizumab. |
| PD | Bartunek_2013 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions effective inhibition of pharmacodynamic markers but provides no numeric PD parameters, dose-response curves, or specific exposure-response data. |
| popPK | Bergstrand_2022 | relevant | 9 | 2 | The paper describes a population PK/PD model for caplacizumab and reports simulated exposure metrics (AUC, Css) in Table 2, but the specific numeric values for clearance, volume, and half-life are not explicitly listed in the provided text. |
| popPK | Coppo_2026 | irrelevant | 1 | 0 | The paper reports pharmacodynamic data (VWF:RCo suppression) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for caplacizumab. |
| PD | Coppo_2026 | not_relevant | 3 | 2 | The paper reports qualitative pharmacodynamic effects (VWF:RCo suppression percentages and time to effect) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) or an effect-vs-concentration curve. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the anti-HIV nanobody Nb457-NbHSA-Nb457 and Ibalizumab, not caplacizumab. |
| popPK | Glassman_2020 | irrelevant | 0 | 0 | The paper discusses ALX-0081 and linagliptin, not caplacizumab. |
| PD | Glassman_2020 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic (PK) phenomena (TMDD/TMEE) for ALX-0081 and linagliptin, not caplacizumab, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Hou_2025 | irrelevant | 0 | 0 | The paper is a bibliometric review of nanobodies in cancer therapy and does not report any quantitative pharmacokinetic parameters for caplacizumab. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for XVR011 (rimteravimab), not caplacizumab. |
| PD | Jansen_2026 | not_relevant | 0 | 0 | The paper reports PK and safety data for rimteravimab (not caplacizumab) and explicitly states that no obvious dose-response in clinical status or respiratory parameters was observed, providing no numeric PD parameters. |
| popPK | Joseph_2023 | irrelevant | 0 | 0 | The paper is a narrative review of TTP at extreme ages and does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for caplacizumab. |
| popPK | Kanaji_2022 | irrelevant | 0 | 0 | The paper describes a mouse model of von Willebrand disease and does not study caplacizumab or report any pharmacokinetic parameters for it. |
| popPK | Kwak_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel ADAMTS13 mutein (GC1126A), with caplacizumab serving only as a comparator agent. |
| PD | Kwak_2025 | not_relevant | 0 | 0 | The paper focuses on a novel ADAMTS13 mutein (GC1126A) and only provides qualitative comparative efficacy data for caplacizumab in a mouse model, without reporting any numeric PD parameters or exposure-response analysis for caplacizumab. |
| PGx | Kwak_2025 | not_relevant | 0 | 0 | The paper reports on a novel ADAMTS13 mutein (GC1126A) and its efficacy compared to caplacizumab, but does not report pharmacogenomic effects (gene variants) on the PK or PD of caplacizumab. |
| popPK | Kühne_2022 | irrelevant | 0 | 0 | The paper is a retrospective clinical cohort study focusing on dosing regimens and clinical outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Kühne_2022 | not_relevant | 2 | 1 | The paper is a retrospective clinical cohort study describing dosing feasibility and clinical outcomes (platelet counts, relapse rates) without reporting numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | This is a narrative review of pathogenesis and therapies for iTTP that mentions caplacizumab as a standard of care but does not report any quantitative pharmacokinetic parameters or models. |
| popPK | Malgaj_2022 | irrelevant | 0 | 0 | This is a literature review of clinical cases of TMA in COVID-19 patients where caplacizumab is mentioned only as a treatment agent, with no pharmacokinetic data reported. |
| popPK | Matsumoto_2021 | irrelevant | 0 | 0 | The paper is a review of TTP pathogenesis and treatment that mentions caplacizumab's mechanism but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Michels_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on VWF in a mouse model of obesity and does not report pharmacokinetic parameters for caplacizumab. |
| PD | Sargentini-Maier_2019 | not_relevant | 2 | 0 | The text is a review that qualitatively describes the mechanism and PK/PD characteristics (target-mediated disposition, vWF suppression) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves in the provided excerpt. |
| popPK | Sarode_2023 | irrelevant | 0 | 0 | The paper is a clinical review discussing the management of TTP and the use of caplacizumab, but it does not report any quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Underwood_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ADAMTS-13 in iTTP patients, with caplacizumab mentioned only as a background adjunct therapy, not as the subject of PK analysis. |
| popPK | Van_2024 | irrelevant | 1 | 0 | The paper is an immunogenicity assessment that qualitatively discusses the impact of antibodies on pharmacokinetics but does not report quantitative PK parameters (CL, V, etc.) for caplacizumab. |
| PD | Van_2024 | not_relevant | 1 | 0 | The paper focuses on immunogenicity (ADA/NAb) and only provides qualitative or descriptive comparisons of PK/PD endpoints (platelet count, VWF) by antibody status, without reporting numeric PD parameters or exposure-response models. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of thrombocytopenia in xenotransplantation using caplacizumab as a therapeutic agent, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for caplacizumab itself. |
| popPK | de_2022 | irrelevant | 0 | 0 | The paper is a preclinical efficacy study of a new drug (Microlyse) using caplacizumab as a comparator, and does not report pharmacokinetic parameters for caplacizumab. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for caplacizumab. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference citation header and contains no data, analysis, or description of pharmacodynamic or exposure-response relationships for caplacizumab. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of caplacizumab pharmacodynamics. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 12:38 UTC</sub>
