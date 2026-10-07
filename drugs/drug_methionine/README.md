<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methionine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methionine_Giulidori1984_reference&quot;,&quot;label&quot;:&quot;Giulidori_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Giulidori1984_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methionine_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# methionine

- **generic name:** methionine
- **ATC codes:** `V03AB26`
- **DrugBank:** [DB00134](https://go.drugbank.com/drugs/DB00134) · **PubChem:** [CID 6137](https://pubchem.ncbi.nlm.nih.gov/compound/6137)
- **molar mass:** 149.211 g/mol (C5H11NO2S) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Methionine is an essential amino acid used as an antidote, for example in poisoning, and also as a nutritional supplement. It is an approved, widely available nutrient and medicine, though it is not an EMA-authorised drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22124685](https://www.wikidata.org/wiki/Q22124685) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methionine | parent | 149.211 | C5H11NO2S | DrugBank | [6137](https://pubchem.ncbi.nlm.nih.gov/compound/6137) | Giulidori_1984 |
| S-adenosyl-L-methionine | metabolite | 399.446 | C15H23N6O5S+ | PubChem | [34756](https://pubchem.ncbi.nlm.nih.gov/compound/34756) | Giulidori_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:04 | 6:11 | 2/0/0 | 1/1/0 | 0/0/0 | 304,483/22,840 | ollama / glm-5.3-flash | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Giulidori_1984_reference](drugs/drug_methionine/Methionine_Giulidori1984_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Giulidori P et al., Pharmacokinetics of S-adenosyl-L-methio…, European journal of clinica… (1984) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kim_2025_reference](drugs/drug_methionine/Methionine_Kim2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim MJ et al., Benzoxazole Derivatives as Potent FXR a…, MedComm (2025) | [10.1002/mco2.70442](https://doi.org/10.1002/mco2.70442) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mizuta_2026_143B_viability](drugs/drug_methionine/pd_Mizuta_2026_143B_viability.md) | Cell viability (proliferation) of 143B cells as a function of methionine concentration ← L-methionine · direct sigmoid Emax (Hill) effect | — | Mizuta K et al., Methionine Restriction Alone Induces T-…, In vivo (Athens, Greece) (2026) | [10.21873/invivo.14239](https://doi.org/10.21873/invivo.14239) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mizuta_2026_K7M2_viability](drugs/drug_methionine/pd_Mizuta_2026_K7M2_viability.md) | Cell viability (proliferation) of K7M2 cells as a function of methionine concentration ← L-methionine · direct sigmoid Emax (Hill) effect | — | Mizuta K et al., Methionine Restriction Alone Induces T-…, In vivo (Athens, Greece) (2026) | [10.21873/invivo.14239](https://doi.org/10.21873/invivo.14239) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span> | [Lignet_2023_Met_EF1](drugs/drug_methionine/pd_Lignet_2023_Met_EF1.md) | Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein ← M8891 (effect compartment concentration Ce) · indirect response — drug inhibits the loss of Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein | model (no simulator) | Lignet F et al., Preclinical Pharmacokinetics and Transl…, Pharmaceutical research (2023) | [10.1007/s11095-023-03611-z](https://doi.org/10.1007/s11095-023-03611-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methionine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BHMT (product), BHMT2 (product), GLUL (inhibitor), MARS1 (substrate), MARS2 (substrate), MAT1A (substrate), MAT2A (substrate), MAT2B (substrate), METAP2 (product), MSRA (substrate), MSRB1 (substrate), MSRB2 (substrate), MTHFR (inhibitor), MTR (product), MTRR (product), SLC16A10 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 208 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giulidori_1984.pdf` | Giulidori P et al., Pharmacokinetics of S-adenosyl-L-methio…, European journal of clinica… (1984) | popPK | 10 | not captured | [6489422](https://pubmed.ncbi.nlm.nih.gov/6489422) | Original human PK study of AdoMet (methionine-derived drug) with numeric V, t½, CL reported directly. |
| `Eymard_2023.pdf` | Eymard N et al., Pharmacokinetic/pharmacodynamic model o…, Medical & biological engine… (2023) | popPK | 5 | [10.1007/s11517-023-02786-2](https://doi.org/10.1007/s11517-023-02786-2) | [36882575](https://pubmed.ncbi.nlm.nih.gov/36882575) | PK/PD modeling of methionine depletion exists, but no numeric parameter values are provided in the evidence; parameters were fitted from mouse data. |

<sub>queue written 2026-10-07T18:59:20.450872+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Begolo_2018 | irrelevant | 0 | 0 | This is a mechanism-of-action study of the benzoxaborole AN7973 in trypanosomes; methionine appears only as a radiolabel and in SAM metabolism, with no PK parameters for methionine. |
| popPK | Bremm_2024 | irrelevant | 0 | 0 | This is a biomimetic polymersome/peptide self-assembly study; methionine appears only as part of an FFM tripeptide, with no pharmacokinetic parameters. |
| popPK | Eymard_2023 | irrelevant | 5 | 2 | PK/PD modeling of methionine depletion exists, but no numeric parameter values are provided in the evidence; parameters were fitted from mouse data. |
| popPK | Gong_2023 | irrelevant | 0 | 0 | This is a metabolomics cohort study of one-carbon metabolite levels and fetal growth, not a pharmacokinetic study of methionine; no disposition parameters (CL, V, ka, half-life, PK model) are reported. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | Methionine appears only as part of the MCD diet model; no PK parameters for methionine are reported. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is about the FXR/PPARα agonist MHY5396, not methionine; methionine appears only as part of a methionine/choline-deficient diet model, and no methionine PK parameters are reported. |
| popPK | Li_2023 | relevant | 4 | 5 | Reports kinetic parameters (Ki, k4) for [11C]methionine PET in humans, but these are tissue metabolic uptake rates rather than classic disposition PK (CL/V/Q/ka), and only Ki values are given numerically. |
| popPK | Lignet_2023 | irrelevant | 0 | 0 | The drug studied is M8891, a methionine aminopeptidase-2 inhibitor — methionine is not the subject drug; no methionine PK parameters are reported. |
| popPK | Martens_2021 | irrelevant | 3 | 2 | This is a PET imaging methodology study using [11C]methionine as a diagnostic tracer in glioma patients; it models tracer transport (K1, k2) but no numeric parameter values are given in the evidence, and methionine is a tracer/probe, not a disposition-PK subject drug. |
| popPK | Michaud_2020 | irrelevant | 2 | 2 | 11C-methionine is only a comparator PET tracer; the PK modeling (k1, k2, Vb) is for 18F-Fluciclovine, and methionine-specific kinetic parameters are not reported numerically. |
| popPK | Mizuta_2026 | irrelevant | 0 | 0 | This is a methionine-restriction cancer immunotherapy study with no PK disposition parameters (CL, V, ka, half-life, or PK model) for methionine; only EC50 values for cell proliferation are reported. |
| popPK | Paiva_2020 | irrelevant | 0 | 0 | This is a phytochemical composition study of tea plant parts; methionine is only measured as a free amino acid content, with no pharmacokinetic parameters. |
| popPK | Souza_2023 | irrelevant | 0 | 0 | This is a nutrition/utilization-efficiency meta-analysis in piglets, not a pharmacokinetic study reporting CL, V, half-life, or compartmental/PK parameters for methionine. |
| popPK | Strathe_2011 | irrelevant | 0 | 0 | This is a nutritional dose-response requirement study in laying hens, not a pharmacokinetic study; no CL, V, or PK model parameters for methionine are reported. |
| popPK | Tatar_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral SAR study; methionine is only a synthetic building block, with no PK parameters and only in silico ADMET predictions. |
| popPK | Vaalburg_1992 | irrelevant | 1 | 0 | A review of PET amino-acid tracers with no numeric PK parameters for methionine; values are not present. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | This is a fungicide mechanism study; methionine is only mentioned as a biochemical reagent, with no PK parameters. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | This is a fungicide resistance study where methionine is only a measured metabolite/rescue additive, with no pharmacokinetic parameters for methionine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:59 UTC</sub>
