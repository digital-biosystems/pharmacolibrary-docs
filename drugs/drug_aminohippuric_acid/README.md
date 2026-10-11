<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;aminohippuric acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminohippuricAcid_Kinowski1995_reference&quot;,&quot;label&quot;:&quot;Kinowski_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminohippuric_acid/AminohippuricAcid_Kinowski1995_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aminohippuric acid

- **generic name:** aminohippuric acid
- **ATC codes:** `V04CH30`
- **DrugBank:** [DB00345](https://go.drugbank.com/drugs/DB00345) · **PubChem:** [CID 2148](https://pubchem.ncbi.nlm.nih.gov/compound/2148)
- **molar mass:** 194.1873 g/mol (C9H10N2O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Aminohippuric acid is a diagnostic agent used in tests of kidney function and for ureteral injuries. It is an approved diagnostic product, though some formulations have been withdrawn; it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q291271](https://www.wikidata.org/wiki/Q291271) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aminohippuric_acid (p-aminohippuric acid) | metabolite | 194.187 | C9H10N2O3 | DrugBank | [2148](https://pubchem.ncbi.nlm.nih.gov/compound/2148) | Estelberger_1995, Kinowski_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:22 | 16:11 | 1/1/1 | 0/1/0 | 0/0/0 | 185,297/12,353 | ollama / glm-5.3-flash | 10 | 3/5 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kinowski_1995_reference](drugs/drug_aminohippuric_acid/AminohippuricAcid_Kinowski1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kinowski JM et al., Bayesian estimation of p-aminohippurate…, Journal of pharmaceutical s… (1995) | [10.1002/jps.2600840309](https://doi.org/10.1002/jps.2600840309) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2020_reference](drugs/drug_aminohippuric_acid/AminohippuricAcid_Gibiansky2020_reference.md) | — | 2-compartment (no model) | 4 | Gibiansky L et al., Mechanistic Population Pharmacokinetic…, Clinical pharmacology and t… (2020) | [10.1002/cpt.1791](https://doi.org/10.1002/cpt.1791) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Estelberger_1995_reference](drugs/drug_aminohippuric_acid/AminohippuricAcid_Estelberger1995_reference.md) | — | 1-compartment (no model) | 5 | Estelberger W et al., System identification of the low-dose k…, European journal of clinica… (1995) | [10.1515/cclm.1995.33.11.847](https://doi.org/10.1515/cclm.1995.33.11.847) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Sullivan_1992_fluorescein_influx](drugs/drug_aminohippuric_acid/pd_Sullivan_1992_fluorescein_influx.md) | fluorescein influx across basolateral surface of S2 proximal tubule ← p-aminohippurate (PAH) · inhibition effect | — | Sullivan LP et al., Specificity of basolateral organic anio…, Journal of the American Soc… (1992) | [10.1681/ASN.V271192](https://doi.org/10.1681/ASN.V271192) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminohippuric_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | kidney | `SLC22A7` substrate | DrugBank actor |
| metabolism | liver | `SLC22A7` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor/substrate, `SLC22A2` inhibitor, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC16A1 (substrate), SLC22A11 (inhibitor), SLC22A11 (substrate), SLCO3A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 138 matched, 83 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kinowski_1995.pdf` | Kinowski JM et al., Bayesian estimation of p-aminohippurate…, Journal of pharmaceutical s… (1995) | popPK | 10 | [10.1002/jps.2600840309](https://doi.org/10.1002/jps.2600840309) | [7616369](https://pubmed.ncbi.nlm.nih.gov/7616369) | Population PK of PAH itself with numeric CL (30.7 L/h) and V (10.6 L) reported directly in the abstract. |
| `Rodríguez-Romero_2015.pdf` | Rodríguez-Romero V et al., A novel, simple and inexpensive procedu…, Journal of pharmaceutical a… (2015) | popPK | 8 | [10.1016/j.jpba.2014.12.009](https://doi.org/10.1016/j.jpba.2014.12.009) | [25594899](https://pubmed.ncbi.nlm.nih.gov/25594899) | PAH is the subject drug with non-compartmental PK; plasma clearance value (3.73±0.38 ml/min) is reported directly in the abstract. |
| `Varma_1981.pdf` | Varma KJ et al., A study on renal function in the Indian…, Journal of veterinary pharm… (1981) | popPK | 5 | [10.1111/j.1365-2885.1981.tb00867.x](https://doi.org/10.1111/j.1365-2885.1981.tb00867.x) | [7349346](https://pubmed.ncbi.nlm.nih.gov/7349346) | PAH clearance/compartmental modeling in buffalo is described, but no numeric parameter values are present in the evidence. |

<sub>queue written 2026-10-07T21:10:43.593975+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avedissian_2021 | irrelevant | 0 | 0 | The paper is a population-PK study of aminoglycosides (gentamicin/tobramycin), not aminohippuric acid; no aminohippuric acid parameters appear. |
| popPK | Commander_2021 | irrelevant | 0 | 0 | The paper models hydrochlorothiazide, not aminohippuric acid, which is not mentioned at all. |
| popPK | Cristea_2021 | irrelevant | 0 | 0 | The paper concerns OAT1,3 ontogeny using amoxicillin, clavulanic acid, piperacillin, and cefazolin; aminohippuric acid is never mentioned and no parameters for it appear. |
| popPK | Damm_1975 | irrelevant | 0 | 0 | The study concerns 3H-digitoxin intestinal transport in vitro; p-aminohippurate is only mentioned as a control compound with no PK parameters for it. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | This EFSA opinion concerns PFASs (PFOA, PFOS, etc.) in food; aminohippuric acid is not the subject drug and no PK parameters for it appear. |
| PGx | Fujita_2005 | not_relevant | 3 | 4 | p-aminohippurate uptake was only tested in vitro in oocytes; the clinical PK endpoint (renal clearance) was for adefovir, not aminohippuric acid. |
| popPK | Gibiansky_2020 | irrelevant | 0 | 0 | This is a population-PK study of oseltamivir/oseltamivir carboxylate; aminohippuric acid is only mentioned as a developmental renal secretion reference, with no PAH PK parameters. |
| popPK | Green_2004 | irrelevant | 0 | 0 | A review of body-size descriptors for PK in obesity with no aminohippuric_acid-specific parameters or numeric values reported. |
| popPK | Gupta_1992 | irrelevant | 0 | 0 | PAH is only a co-infused diagnostic probe for renal plasma flow; PK parameters reported are for enalkiren, not aminohippuric acid. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Itoh_1986 | irrelevant | 3 | 2 | In-vitro/isolated perfused rat kidney transport mechanism study of PAH uptake, not a PK disposition study with quantitative CL/V parameters; no numeric values present. |
| popPK | Kaufhold_2011 | irrelevant | 0 | 0 | In-vitro transporter study in HEK293 cells; PAH is only a radiolabeled uptake probe, no PK disposition parameters for aminohippuric acid. |
| popPK | Koshi_1983 | irrelevant | 0 | 0 | The evidence contains no usable text or numeric PK data for aminohippuric acid, only a Grobid processing header. |
| popPK | Landersdorfer_2008 | irrelevant | 0 | 0 | The study concerns flucloxacillin and piperacillin PK interaction; aminohippuric acid is not mentioned at all. |
| PGx | Mandíková_2013 | not_relevant | 2 | 3 | In vitro transporter interaction study of ANPs with no gene variant/genotype effect on aminohippuric acid PK/PD parameters. |
| popPK | Millecam_2019 | irrelevant | 2 | 1 | Aminohippuric acid (PAH) is used only as a diagnostic renal plasma flow marker in a pig ibuprofen PK study; its clearance values appear only in supplementary figures, not in the provided evidence. |
| popPK | Munar_1991 | irrelevant | 2 | 1 | Para-aminohippurate is used only as a renal clearance marker; no PK disposition parameters for aminohippuric acid itself are reported. |
| PGx | Nortje_2016 | not_relevant | 4 | 3 | All volunteers were homozygous for the same genotype, so no gene-variant effect on PAHA excretion (PK parameter) can be assessed; only interindividual variability is reported. |
| PGx | Nozaki_2007 | not_relevant | 0 | 0 | Study examines drug-drug inhibition of methotrexate transport, not genetic variants affecting aminohippuric acid PK/PD. |
| popPK | Okudaira_1989 | irrelevant | 2 | 2 | PAH is only a probe/comparator in an isolated perfused rat kidney study of cimetidine transport; no aminohippuric acid PK parameters are reported. |
| popPK | Oriuchi_1995 | irrelevant | 2 | 1 | PAH clearance is used only as a gold-standard comparator for 99mTc-MAG3 clearance; no PAH disposition parameters are reported, and no numeric values appear in the evidence. |
| popPK | Oriuchi_1998 | irrelevant | 2 | 2 | The PK model and clearance values are for 99mTc-MAG3; para-aminohippurate is only used as a reference ERPF clearance comparator, with no PAH disposition parameters reported. |
| PGx | Patel_2008 | not_relevant | 2 | 4 | Para-aminohippuric acid is only used as a clearance tracer to measure renal plasma flow; the genotype effect is on renal vascular responsiveness to angiotensin II, not on PAH's own PK/PD parameters. |
| popPK | Qiao_2005 | irrelevant | 0 | 0 | p-aminohippuric acid is only used as an extracellular indicator/dilution marker; the PK modeling concerns glucose, not aminohippuric acid itself. |
| PGx | Ritt_2008 | not_relevant | 3 | 5 | PAH is only a probe to measure RPF; the NOS3 genotype affects renal response to L-arginine/vitamin C, not the PK/PD of aminohippuric acid itself. |
| PGx | Sakolish_2025 | not_relevant | 2 | 3 | Study compares engineered OAT-overexpressing cell lines for PAH transport in vitro, not a genetic variant effect on a PK/PD parameter in vivo. |
| popPK | Song_1996 | irrelevant | 3 | 5 | Aminohippuric acid (PAHA) is only a metabolite of p-aminobenzoic acid dosing, not the subject drug; only half-lives (e.g., PAHA 12.81 ± 6.04 min) are given, no CL/V or population model. |
| popPK | Sugawara_1997 | irrelevant | 1 | 2 | PAH is used only as a diagnostic probe to measure renal blood flow; no PK disposition parameters (CL, V, half-life) for aminohippuric acid itself are reported. |
| popPK | Taylor_2001 | irrelevant | 0 | 0 | A review of antiretroviral drug distribution into semen with no aminohippuric_acid parameters or numeric PK values. |
| PGx | Vanwert_2007 | not_relevant | 3 | 5 | Oat3 knockout did not alter p-aminohippurate elimination; no pharmacogenomic effect on aminohippuric acid PK/PD is reported. |
| popPK | Varma_1981 | relevant | 5 | 2 | PAH clearance/compartmental modeling in buffalo is described, but no numeric parameter values are present in the evidence. |
| popPK | Worley_2015 | irrelevant | 0 | 0 | The paper models PFOA, not aminohippuric acid; aminohippuric acid is not the subject drug. |
| popPK | Wright_2017 | irrelevant | 1 | 0 | A theoretical commentary on renal handling models with no numeric PK parameters for aminohippuric acid reported in the evidence. |
| PGx | Yang_2013 | not_relevant | 0 | 0 | The drug studied is valacyclovir; p-aminohippurate appears only as a non-inhibitory co-perfusate, with no gene-variant effect on aminohippuric acid PK/PD reported. |
| PGx | Yin_2016 | not_relevant | 2 | 1 | Review of renal transporters and DDIs; PAH mentioned only as an OAT probe substrate, no gene variant effect on its PK/PD reported. |
| PGx | Zeltner_2001 | not_relevant | 0 | 0 | not captured |
| PGx | Zhang_2018 | not_relevant | 3 | 5 | Effects are from transporter inhibition (cephalothin) in rats, not gene variant/genotype/phenotype effects on PAH PK/PD. |
| popPK | Ziemniak_1988 | irrelevant | 1 | 3 | PAH (aminohippuric acid) is used only as a diagnostic marker of renal plasma flow; the PK parameters reported (Emax, EC50) are for fenoldopam, not PAH disposition. |
| popPK | Zitta_2000 | irrelevant | 2 | 3 | PAH is used only as a diagnostic renal clearance probe; no disposition PK parameters (CL, V, half-life, compartmental model) for PAH itself are reported. |
| popPK | Zitta_2002 | irrelevant | 2 | 0 | PAH is used only as a diagnostic clearance marker; no numeric PK parameters for aminohippuric acid are reported. |
| popPK | de_1998 | irrelevant | 1 | 1 | PAH is only used as a renal/probe infusion tracer; no PK parameters for aminohippuric acid are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:10 UTC</sub>
