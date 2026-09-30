<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lonafarnib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lonafarnib_Canini2017_reference&quot;,&quot;label&quot;:&quot;Canini_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lonafarnib

- **generic name:** lonafarnib
- **ATC codes:** `A16AX20`
- **DrugBank:** [DB06448](https://go.drugbank.com/drugs/DB06448) · **PubChem:** [CID 148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195)
- **molar mass:** 638.822 g/mol (C27H31Br2ClN4O2) — DrugBank
- **groups:** approved

## About

**Description.** Hutchinson-Gilford progeria syndrome (HGPS) is a rare autosomal dominant disorder estimated to affect approximately one in 20 million individuals resulting in adverse symptoms associated with premature ageing: skeletal dysplasia, joint contractures, atherosclerosis, myocardial fibrosis/dysfunction, scleroderma-like cutaneous effects, lipoatrophy, alopecia, and a severe failure to thrive; HGPS is uniformly fatal.[A224379, A224384, A224389, A224394, A224399] Mechanistically, HGPS is underpinned by a single heterozygous C-to-T mutation at position 1824 of the _LMNA_ gene, which results in the accumulation of an aberrant farnesylated form of lamin A called progerin in the inner nuclear membrane.[A224379, A224394] Lonafarnib is a farnesyl transferase (FTase) inhibitor (FTI), which reduces the farnesylation of numerous cellular proteins, including progerin; as progerin farnesylation is important for localization to the nuclear membrane, lonafarnib inhibits progerin accumulation and improves symptoms in HGPS patients.[A224379, A224414, A224419, L23414]

Merck originally developed Lonafarnib and subsequently licensed it to Eiger Biopharmaceuticals Inc., which currently markets it under the trademark ZOKINVY™.[L23414, L23544] Lonafarnib was granted FDA approval on November 20, 2020, and is the first FDA-approved treatment for HGPS and other related progeroid laminopathies.[L23414, L23549]

**Indication.** Lonafarnib is a farnesyltransferase inhibitor indicated in patients aged 12 months and older with a body surface area of at least 0.39 m<sup>2</sup> to reduce the risk of mortality associated with Hutchinson-Gilford progeria syndrome (HGPS). It is also indicated in this same population for the treatment of processing-deficient progeroid laminopathies that either involve a heterozygous _LMNA_ mutation resulting in the accumulation of a progerin-like protein or homozygous/compound heterozygous mutations in _ZMPSTE24_.[L23414]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lonafarnib | parent | 638.822 | C27H31Br2ClN4O2 | DrugBank | [148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195) | Canini_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 13:04 | 29:38 | 0/0/1 | 1/0/0 | 0/0/0 | 299,039/29,092 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 6/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Canini_2017_reference](drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md) | — | 2-compartment (no model) | 4 | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Canini_2017_HDV](drugs/drug_lonafarnib/pd_Canini_2017_HDV.md) | HDV RNA ← lonafarnib · direct sigmoid Emax (Hill) effect | — | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lonafarnib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…% and &lt;1% of the initial radiolabeled dose was recovered in feces and urine, respectively.…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FNTA (inhibitor), FNTB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Awada_2002.pdf` | Awada A et al., Phase I and pharmacological study of th…, European journal of cancer… (2002) | popPK | 8 | [10.1016/s0959-8049(02)00379-9](https://doi.org/10.1016/s0959-8049(02)00379-9) | [12441264](https://pubmed.ncbi.nlm.nih.gov/12441264) | The paper reports PK parameters for lonafarnib (SCH 66336) including half-life and qualitative descriptions of volume, but specific numeric values for clearance, volume, or compartmental model parameters are not present in the provided text. |
| `Castaneda_2011.pdf` | Castaneda C et al., Phase I and pharmacokinetic study of lo…, Cancer chemotherapy and pha… (2011) | popPK | 8 | [10.1007/s00280-010-1488-5](https://doi.org/10.1007/s00280-010-1488-5) | [20972873](https://pubmed.ncbi.nlm.nih.gov/20972873) | The paper is a Phase I PK study of lonafarnib, but the provided evidence contains only qualitative descriptions (e.g., "exposure increased with dose") without specific numeric parameter values like CL, V, or t1/2. |
| `Hahn_2020.pdf` | Hahn HJ et al., In Vitro Evaluation of Farnesyltransfer…, Pathogens (Basel, Switzerla… (2020) | pd | 4 | [10.3390/pathogens9090689](https://doi.org/10.3390/pathogens9090689) | [32842691](https://www.ncbi.nlm.nih.gov/pubmed/32842691) | metadata signals extractable PD data (EC50) |
| `Yu_2022.pdf` | Yu J et al., Pharmacokinetic Drug-Drug Interactions…, Drug metabolism and disposi… (2022) | pgx | 8 | [10.1124/dmd.121.000401](https://doi.org/10.1124/dmd.121.000401) | [34620694](https://www.ncbi.nlm.nih.gov/pubmed/34620694) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-27T12:51:25.246498+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asselah_2020 | irrelevant | 0 | 0 | The paper is a review of HDV treatments and does not report any quantitative pharmacokinetic parameters for lonafarnib. |
| popPK | Awada_2002 | relevant | 8 | 2 | The paper reports PK parameters for lonafarnib (SCH 66336) including half-life and qualitative descriptions of volume, but specific numeric values for clearance, volume, or compartmental model parameters are not present in the provided text. |
| popPK | Balmus_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Remodelin (a NAT10 inhibitor), while lonafarnib is only mentioned as a standard-of-care comparator in the discussion without any reported PK parameters. |
| PD | Balmus_2018 | not_relevant | 0 | 0 | The paper studies Remodelin (a NAT10 inhibitor), not lonafarnib, and reports only qualitative efficacy and basic PK data without any exposure-response or dose-response modeling. |
| popPK | Castaneda_2011 | relevant | 8 | 0 | The paper is a Phase I PK study of lonafarnib, but the provided evidence contains only qualitative descriptions (e.g., "exposure increased with dose") without specific numeric parameter values like CL, V, or t1/2. |
| popPK | Caviglia_2020 | irrelevant | 0 | 0 | The paper is a narrative review of hepatitis D therapies that discusses lonafarnib's mechanism of action but does not report any quantitative pharmacokinetic parameters. |
| popPK | Chow_2008 | irrelevant | 2 | 0 | The study mentions pharmacokinetic analysis but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for lonafarnib. |
| popPK | Cortes_2007 | irrelevant | 2 | 0 | The study is a Phase 1 clinical trial focused on safety and efficacy, and while it mentions pharmacokinetics, it provides no quantitative disposition parameters (CL, V, etc.) for lonafarnib in the provided text. |
| PD | Feldman_2008 | not_relevant | 3 | 1 | The paper reports PK data and a binary pharmacodynamic marker (HDJ-2 farnesylation shift) but explicitly states that no clear correlation between the PD marker and clinical effect could be made, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Foo_2024 | irrelevant | 0 | 0 | The paper is a mechanistic cellular study on lamin A farnesylation and does not report any pharmacokinetic parameters for lonafarnib. |
| popPK | Gabriel_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cellular homeostasis and does not report any pharmacokinetic parameters for lonafarnib. |
| PD | Ghosal_2006 | not_relevant | 0 | 0 | The paper describes in vitro metabolic pathways and CYP enzyme identification, not pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Ghosal_2006 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for lonafarnib metabolism but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Hahn_2020 | not_relevant | 0 | 0 | The paper evaluates a farnesyltransferase inhibitor against Naegleria fowleri in vitro and does not mention lonafarnib or report any pharmacodynamic parameters for it. |
| PD | Hongnak_2023 | not_relevant | 3 | 3 | The paper reports IC50 values for lonafarnib and its derivatives in cell lines, which are single-point potency metrics rather than a full exposure-response or dose-response curve with derived PD parameters (e.g., Emax, slope, EC50 from a fitted model). |
| PGx | Jung_2023 | not_relevant | 0 | 0 | The paper is a review on the regulation of protein prenylation and does not report pharmacogenomic effects on lonafarnib PK/PD parameters. |
| popPK | Khuri_2004 | irrelevant | 2 | 0 | The study mentions pharmacokinetics but provides no quantitative disposition parameters (CL, V, t1/2) for lonafarnib in the evidence. |
| popPK | Kim_1999 | irrelevant | 0 | 0 | The paper studies SCH 66336, not lonafarnib. |
| popPK | Milojkovic_2013 | irrelevant | 2 | 0 | The study mentions pharmacokinetics but the provided evidence contains no quantitative PK parameters (CL, V, t1/2, etc.) for lonafarnib. |
| PD | Moorthy_2013 | not_relevant | 1 | 0 | The text is a structural review of farnesyltransferase inhibitors that mentions lonafarnib clinical studies but provides no numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Negro_2023 | irrelevant | 0 | 0 | The paper is a clinical review of Hepatitis D that mentions lonafarnib only as a therapeutic agent with efficacy data, containing no pharmacokinetic parameters. |
| PGx | Okawa_2025 | not_relevant | 0 | 0 | The paper is an epidemiological survey of HGPS prevalence and clinical features in Japan, not a pharmacogenomic study of lonafarnib PK/PD. |
| popPK | Ready_2007 | irrelevant | 2 | 0 | The study mentions pharmacokinetics were characterized but the provided evidence contains no quantitative PK parameters (CL, V, t1/2, etc.) for lonafarnib. |
| popPK | Reinshagen_2025 | irrelevant | 0 | 0 | The paper describes bioinformatics annotation workflows for drug repurposing and does not contain any pharmacokinetic data or parameters for lonafarnib. |
| PD | Reinshagen_2025 | not_relevant | 0 | 0 | The paper describes bioinformatics pipelines for drug repurposing and does not report any pharmacodynamic or exposure-response data for lonafarnib. |
| popPK | Rizzetto_2018 | irrelevant | 0 | 0 | The paper is a review of therapeutic strategies for Hepatitis D and does not report any quantitative pharmacokinetic parameters for lonafarnib. |
| popPK | Sake_2024 | irrelevant | 1 | 0 | The paper is a mechanistic antiviral study reporting IC50 values and binding kinetics, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Saracco_2022 | irrelevant | 0 | 0 | The paper is a narrative review of chronic viral hepatitis therapies that mentions lonafarnib only as a therapeutic agent without reporting any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Soriano_2017 | irrelevant | 0 | 0 | The paper is a review of hepatitis delta and HIV infection that mentions lonafarnib only as a therapeutic class (prenylation inhibitor) without reporting any pharmacokinetic parameters. |
| popPK | Soriano_2023 | irrelevant | 0 | 0 | The paper is a review of bulevirtide (BLV) for hepatitis delta, and lonafarnib is only mentioned as a future combination therapy agent without any pharmacokinetic data. |
| popPK | Soriano_2023_2 | irrelevant | 0 | 0 | The paper is a narrative review discussing the clinical management of Hepatitis Delta and HIV, mentioning lonafarnib only as a therapeutic agent without reporting any pharmacokinetic parameters or quantitative disposition data. |
| PD | Taylor_2008 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (growth inhibition, apoptosis, biomarker shifts) of a drug combination but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or a formal PK/PD model fit. |
| popPK | Theodore_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gemcitabine and the efficacy of SCH66336 (tipifarnib), not the quantitative PK parameters of lonafarnib. |
| PGx | Tong_2006 | not_relevant | 0 | 0 | The paper describes the analytical identification of unstable metabolites of lonafarnib using mass spectrometry and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of lonafarnib with chemotherapy in HCC cells and its impact on drug resistance mechanisms (ABCB1), but it does not report pharmacogenomic effects (gene variants changing PK/PD) of lonafarnib itself. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the effect of viral genotypes (HDV/HBV) on drug efficacy, which is a virological factor, not a human pharmacogenomic variant affecting PK/PD. |
| popPK | Wong_2011 | relevant | 4 | 2 | The study reports qualitative PK parameters (half-life, Tmax) for lonafarnib but lacks quantitative disposition parameters like clearance (CL) or volume (V) required for population-PK modeling. |
| PD | Wong_2011 | not_relevant | 1 | 0 | The text mentions pharmacodynamics as an endpoint but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving lonafarnib, not pharmacogenomic effects (gene variants) on its PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 12:51 UTC</sub>
