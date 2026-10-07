<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;chlorambucil&quot;}]"></div>

# chlorambucil

- **generic name:** chlorambucil
- **ATC codes:** `L01AA02`
- **DrugBank:** [DB00291](https://go.drugbank.com/drugs/DB00291) · **PubChem:** [CID 2708](https://pubchem.ncbi.nlm.nih.gov/compound/2708)
- **molar mass:** 304.212 g/mol (C14H19Cl2NO2) — DrugBank
- **groups:** approved, investigational

## About

Chlorambucil is an alkylating anticancer drug used to treat cancers such as chronic lymphocytic leukemia, Hodgkin lymphoma, and other lymphoid malignancies. It remains an approved medicine and has been included on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415939](https://www.wikidata.org/wiki/Q415939) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorambucil | parent | 304.212 | C14H19Cl2NO2 | DrugBank | [2708](https://pubchem.ncbi.nlm.nih.gov/compound/2708) | Al-Nadaf_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:23 | 0:44 | 0/1/0 | 0/0/0 | 0/0/0 | 59,119/3,455 | einfracz / qwen3.8-27b | 5 | 4/1 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Al-Nadaf_2022_cats with indolent lymphoproliferative malignancies](drugs/drug_chlorambucil/Chlorambucil_AlNadaf2022_reference.md) | — | 1-compartment (no model) | 2 | Al-Nadaf S et al., Population pharmacokinetics identifies…, American journal of veterin… (2022) | [10.2460/ajvr.22.06.0099](https://doi.org/10.2460/ajvr.22.06.0099) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlorambucil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| absorption | small intestine | `SLCO1A2` unknown | DrugBank actor |
| metabolism | liver | `GSTP1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSTA1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Nadaf_2022.pdf` | Al-Nadaf S et al., Population pharmacokinetics identifies…, American journal of veterin… (2022) | popPK | 10 | [10.2460/ajvr.22.06.0099](https://doi.org/10.2460/ajvr.22.06.0099) | [36155936](https://pubmed.ncbi.nlm.nih.gov/36155936) | The study is a population PK analysis of chlorambucil in cats, and the abstract provides specific numeric values for Cmax, Tmax, and half-life. |
| `Newell_1983.pdf` | Newell DR et al., Studies on the pharmacokinetics of chlo…, British journal of clinical… (1983) | popPK | 8 | [10.1111/j.1365-2125.1983.tb01494.x](https://doi.org/10.1111/j.1365-2125.1983.tb01494.x) | [6849759](https://pubmed.ncbi.nlm.nih.gov/6849759) | The paper describes a two-compartment PK model for chlorambucil in humans, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided abstract/evidence. |
| `Johnson_2013.pdf` | Johnson GG et al., CYP2B6*6 is an independent determinant…, Blood (2013) | pgx | 5 | [10.1182/blood-2013-07-516666](https://doi.org/10.1182/blood-2013-07-516666) | [24128861](https://www.ncbi.nlm.nih.gov/pubmed/24128861) | metadata signals extractable PGX data (CYP2B6*6) |

<sub>queue written 2026-10-07T16:22:58.170863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Sawaf_2021 | irrelevant | 0 | 0 | The study focuses on minimal residual disease kinetics and efficacy outcomes in chronic lymphocytic leukemia, using chlorambucil only as a comparator arm, with no pharmacokinetic parameters reported. |
| PGx | Al-Sawaf_2023 | not_relevant | 0 | 0 | The paper compares the clinical efficacy (PFS/OS) and transcriptomic profiles of two different drug regimens; it does not report pharmacogenomic effects of variants on the pharmacokinetics or pharmacodynamics of chlorambucil. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | The study investigates CYP3A4 inhibition by various drugs in vitro and does not examine the effect of genetic variants on chlorambucil PK or PD. |
| PGx | Campos_2014 | not_relevant | 0 | 0 | The paper focuses on ecotoxicology in *Daphnia magna* (a water flea) and ABC transporter mechanisms, not human pharmacogenomics or clinical PK/PD parameters. |
| popPK | Campàs_2006 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of Bcl-2 inhibitors on CLL cells where chlorambucil is used only as a comparator chemotherapy agent, not as the subject of PK analysis. |
| PD | Campàs_2006 | not_relevant | 1 | 0 | The paper reports EC50 values for Bcl-2 inhibitors (HA14-1, etc.) but only qualitatively describes the additive effect of chlorambucil combinations without providing numeric PD parameters or dose-response curves for chlorambucil itself. |
| PGx | Dupuis_2015 | not_relevant | 0 | 0 | The text describes the clinical efficacy of obinutuzumab in CLL and does not report any pharmacogenomic effects on the PK or PD parameters of chlorambucil. |
| PGx | Evers_2010 | not_relevant | 1 | 2 | The paper investigates a cellular sensitivity mechanism (BRCA2 deficiency) to alkylators like chlorambucil, not a human pharmacogenomic effect (gene variant) on specific PK/PD parameters. |
| PGx | Farmer_1979 | not_relevant | 0 | 0 | The study focuses on the metabolic mechanism of chlorambucil in rats using deuterated analogues, not on human pharmacogenomic variants (genotypes/phenotypes) affecting PK or PD parameters. |
| PGx | Friedman_2009 | not_relevant | 0 | 0 | The paper reports on gene expression signatures (phenotypes) for predicting clinical response, not the effect of a specific genetic variant on a pharmacokinetic (PK) or pharmacodynamic (PD) parameter. |
| PGx | Glassock_2001 | not_relevant | 0 | 0 | The text is a historical review of glomerular therapeutics and mentions chlorambucil only as part of a general list of agents used in the mid-20th century, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Habtemariam_2000 | irrelevant | 0 | 0 | Chlorambucil is used only as a comparator standard for cytotoxicity, and no pharmacokinetic parameters are reported. |
| PD | Habtemariam_2000 | not_relevant | 1 | 0 | The paper reports an EC50 for a herbal extract and mentions chlorambucil only as a standard comparator without providing its specific numeric PD parameters or dose-response curve. |
| PGx | Hassan_2013 | not_relevant | 2 | 0 | The paper is a review of busulfan and cyclophosphamide; chlorambucil is only mentioned in passing regarding GST transport, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Hirt_2008 | not_relevant | 0 | 0 | The study investigates the prognostic value of PCR monitoring for lymphoma clearance in response to chemotherapy/rituximab and does not report any pharmacogenomic effects on the PK or PD of chlorambucil. |
| PGx | Iyer_2017 | not_relevant | 0 | 0 | The text provides a list of pharmacological mechanism scores for a different drug (Tamoxifen) and does not mention chlorambucil or any specific gene variant effects on its PK/PD. |
| PGx | Johnson_2013 | not_relevant | 3 | 2 | The paper investigates the pharmacogenomic effect of CYP2B6*6 on response to fludarabine plus cyclophosphamide, not on a pharmacokinetic or pharmacodynamic parameter of chlorambucil (which is mentioned only as a control arm). |
| PGx | Liang_2004 | not_relevant | 0 | 0 | The paper reports on drug resistance mechanisms (MDR-1, MMPs) and invasiveness in cell lines, not on pharmacokinetic or pharmacodynamic parameters modulated by specific human gene variants in vivo. |
| popPK | Newell_1983 | relevant | 8 | 0 | The paper describes a two-compartment PK model for chlorambucil in humans, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided abstract/evidence. |
| PGx | Sellick_2008 | not_relevant | 0 | 0 | The paper reports genetic associations with clinical survival outcomes (PFS/OS), not changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Szturz_2014 | not_relevant | 0 | 0 | The paper focuses on the efficacy of anakinra in Schnitzler syndrome and mentions a NLRP3 polymorphism in the context of disease response, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of chlorambucil. |
| PGx | Tan_1995 | not_relevant | 0 | 0 | The text is a general review of amyloidosis treatments and does not discuss pharmacogenomics or genetic variants affecting chlorambucil PK/PD. |
| PGx | Teichert_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of bendamustine, not chlorambucil, and does not report pharmacogenomic variants affecting PK/PD parameters. |
| PGx | Wade_2011 | not_relevant | 2 | 0 | The study reports associations between SNPs and clinical outcomes (progression-free survival) in a mixed-treatment trial, but does not quantify specific pharmacokinetic or pharmacodynamic changes in chlorambucil. |
| PGx | Yogarajah_2017 | not_relevant | 0 | 0 | The paper is a literature review on leukemic transformation in myeloproliferative neoplasms; chlorambucil is mentioned only as a risk factor for transformation, not in the context of pharmacokinetic or pharmacodynamic pharmacogenomics. |
| popPK | Zefirov_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis, cytotoxicity, and molecular docking of a chlorambucil-podophyllotoxin conjugate, containing no pharmacokinetic parameters for chlorambucil. |
| PD | Zefirov_2021 | not_relevant | 0 | 0 | The paper focuses on the synthesis, biotesting, and molecular modeling of a chlorambucil-podophyllotoxin conjugate, not on the pharmacodynamics or exposure-response relationship of chlorambucil itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:22 UTC</sub>
