<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;chlorambucil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlorambucil_AlNadaf2022_cats_with_indolent_lymphoproliferat&quot;,&quot;label&quot;:&quot;Al-Nadaf_2022_cats with indolent lymphoproliferative malignancies&quot;,&quot;href&quot;:&quot;drugs/drug_chlorambucil/Chlorambucil_AlNadaf2022_cats_with_indolent_lymphoproliferat.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# chlorambucil

- **generic name:** chlorambucil
- **ATC codes:** `L01AA02`
- **DrugBank:** [DB00291](https://go.drugbank.com/drugs/DB00291)
- **groups:** approved, investigational

## About

**Description.** A nitrogen mustard alkylating agent used as antineoplastic agent for the treatment of various malignant and nonmalignant diseases. Although it is less toxic than most other nitrogen mustards, it has been listed as a known carcinogen in the Fourth Annual Report on Carcinogens (NTP 85-002, 1985). (Merck Index, 11th ed)

**Indication.** For treatment of chronic lymphatic (lymphocytic) leukemia,  childhood minimal-change nephrotic syndrome, and malignant lymphomas including lymphosarcoma, giant follicular lymphoma, Hodgkin's disease,  non-Hodgkin's lymphomas, and Waldenström’s Macroglobulinemia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 03:50 | 13:54 | 0/0/0 | 0/0/0 | 0/0/0 | 122,412/9,705 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 4/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Al-Nadaf_2022_cats with indolent lymphoproliferative malignancies](drugs/drug_chlorambucil/Chlorambucil_AlNadaf2022_cats_with_indolent_lymphoproliferat.md) | Al-Nadaf S et al., Population pharmacokinetics identifies…, American journal of veterin… (2022) | [10.2460/ajvr.22.06.0099](https://doi.org/10.2460/ajvr.22.06.0099) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlorambucil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| absorption | small intestine | `SLCO1A2` unknown | DrugBank actor |
| metabolism | liver | `GSTP1` substrate | DrugBank actor |
| metabolism | lung | `GSTP1` substrate | DrugBank actor |
| excretion | kidney | <sub>“…t it is almost completely metabolized, having extremely low urinary excretion.…”</sub> | prose |
| excretion | liver | <sub>“…Chlorambucil is extensively metabolized in the liver primarily to phenylacetic acid mustar…”</sub> | prose |
| excretion | small intestine | <sub>“…inetic data suggests that oral chlorambucil undergoes rapid gastrointestinal absorption an…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSTA1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Nadaf_2022.pdf` | Al-Nadaf S et al., Population pharmacokinetics identifies…, American journal of veterin… (2022) | popPK | 10 | [10.2460/ajvr.22.06.0099](https://doi.org/10.2460/ajvr.22.06.0099) | [36155936](https://pubmed.ncbi.nlm.nih.gov/36155936) | The study reports population PK parameters for chlorambucil in cats, with key numeric values (Cmax, half-life) present in the abstract, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Newell_1983.pdf` | Newell DR et al., Studies on the pharmacokinetics of chlo…, British journal of clinical… (1983) | popPK | 8 | [10.1111/j.1365-2125.1983.tb01494.x](https://doi.org/10.1111/j.1365-2125.1983.tb01494.x) | [6849759](https://pubmed.ncbi.nlm.nih.gov/6849759) | The paper describes a pharmacokinetic study of chlorambucil using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Johnson_2013.pdf` | Johnson GG et al., CYP2B6*6 is an independent determinant…, Blood (2013) | pgx | 5 | [10.1182/blood-2013-07-516666](https://doi.org/10.1182/blood-2013-07-516666) | [24128861](https://www.ncbi.nlm.nih.gov/pubmed/24128861) | metadata signals extractable PGX data (CYP2B6*6) |

<sub>queue written 2026-09-15T03:43:57.281731+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Sawaf_2021 | irrelevant | 0 | 0 | The study focuses on minimal residual disease (MRD) kinetics and efficacy outcomes, with chlorambucil serving only as a comparator arm, and no pharmacokinetic parameters for chlorambucil are reported. |
| PGx | Al-Sawaf_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes (PFS, OS) and transcriptomic profiles, but does not report pharmacokinetic or pharmacodynamic parameters of chlorambucil or any pharmacogenomic effects on them. |
| PGx | Baumhäkel_2001 | not_relevant | 0 | 0 | The paper reports that chlorambucil does not inhibit CYP3A4 in vitro, but it does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of chlorambucil. |
| PGx | Campos_2014 | not_relevant | 0 | 0 | The paper studies ABC transporter mechanisms in Daphnia magna (an ecotoxicology model) and does not report human pharmacogenomic effects on chlorambucil PK/PD. |
| popPK | Campàs_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Bcl-2 inhibitors and does not report pharmacokinetic parameters for chlorambucil, which is only used as a co-administered cytotoxic agent. |
| PD | Campàs_2006 | not_relevant | 1 | 0 | The paper reports EC50 values for Bcl-2 inhibitors (HA14-1, etc.) but only qualitatively describes the additive effect of chlorambucil combinations without providing numeric PD parameters or dose-response curves for chlorambucil itself. |
| PGx | Dupuis_2015 | not_relevant | 0 | 0 | The text describes the clinical efficacy of obinutuzumab combined with chlorambucil but does not report any pharmacogenomic effects on chlorambucil's PK or PD parameters. |
| PGx | Evers_2010 | not_relevant | 2 | 0 | The paper reports differential toxicity (PD) of chlorambucil in BRCA2-deficient vs. proficient cells, but does not report a pharmacokinetic parameter or a specific quantitative pharmacogenomic effect size for chlorambucil. |
| PGx | Farmer_1979 | not_relevant | 0 | 0 | The study investigates the metabolic effects of deuterium labeling on chlorambucil in rats, not the impact of human genetic variants on pharmacokinetics or pharmacodynamics. |
| PGx | Friedman_2009 | not_relevant | 2 | 0 | The paper reports gene expression signatures predicting clinical response to chlorambucil, but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to genetic variants. |
| PGx | Glassock_2001 | not_relevant | 0 | 0 | The text is a historical review of glomerular therapeutics and mentions chlorambucil only as a past therapeutic agent, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Habtemariam_2000 | irrelevant | 0 | 0 | The paper investigates the cytotoxicity of a herbal extract using chlorambucil only as a comparator, with no pharmacokinetic data reported. |
| PD | Habtemariam_2000 | not_relevant | 1 | 0 | The paper reports an EC50 for a herbal extract and mentions chlorambucil only as a standard comparator without providing its specific numeric PD parameters or dose-response curve. |
| PGx | Hassan_2013 | not_relevant | 0 | 0 | The paper discusses busulfan and cyclophosphamide, mentioning chlorambucil only in passing regarding GST transport, without reporting specific pharmacogenomic effects on chlorambucil PK/PD. |
| PGx | Hirt_2008 | not_relevant | 0 | 0 | The study evaluates the prognostic value of tumor marker clearance (CLC) in response to chemotherapy but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of chlorambucil. |
| PGx | Iyer_2017 | not_relevant | 0 | 0 | The text lists pharmacological mechanisms and CYP interactions for Tamoxifen, with no mention of chlorambucil or specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Johnson_2013 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2B6 variants on the response to fludarabine plus cyclophosphamide, not chlorambucil. |
| PGx | Liang_2004 | not_relevant | 0 | 0 | The paper reports in vitro drug resistance and invasiveness in cell lines, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Newell_1983 | relevant | 8 | 2 | The paper describes a pharmacokinetic study of chlorambucil using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Sellick_2008 | not_relevant | 0 | 0 | The paper reports associations between SNPs and clinical outcomes (PFS/OS), not pharmacokinetic or pharmacodynamic parameters of chlorambucil. |
| PGx | Szturz_2014 | not_relevant | 0 | 0 | The paper reports on the efficacy of anakinra in Schnitzler syndrome and mentions chlorambucil only as a failed prior therapy, without analyzing any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Tan_1995 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy of chlorambucil in amyloidosis but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Teichert_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of bendamustine, not chlorambucil, and does not report pharmacogenomic effects on chlorambucil PK/PD parameters. |
| PGx | Wade_2011 | not_relevant | 0 | 0 | The paper reports associations between genetic variants and clinical outcomes (progression-free survival) in CLL patients, not pharmacokinetic or pharmacodynamic parameters of chlorambucil. |
| PGx | Yogarajah_2017 | not_relevant | 0 | 0 | The paper is a review of leukemic transformation in MPNs and mentions chlorambucil only as a risk factor for transformation, not as a subject of pharmacogenomic analysis on PK/PD parameters. |
| popPK | Zefirov_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis, in-vitro biological testing, and molecular modeling of a chlorambucil-podophyllotoxin conjugate, and it does not report any pharmacokinetic parameters for chlorambucil. |
| PD | Zefirov_2021 | not_relevant | 0 | 0 | The paper focuses on the synthesis, biotesting, and molecular modeling of a chlorambucil-podophyllotoxin conjugate, not on the pharmacodynamics or exposure-response relationship of chlorambucil itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 03:44 UTC</sub>
