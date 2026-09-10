# triamcinolone

- **generic name:** triamcinolone
- **ATC codes:** `A01AC01`, `C05AA12`, `D07AB09`, `D07BB03`, `D07CB01`, `D07XB02`, `H02AB08`, `R01AD11`, `R03BA06`, `S01BA05`, `S02CA04`
- **DrugBank:** [DB00620](https://go.drugbank.com/drugs/DB00620)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Triamcinolone is a corticosteroid used to treat various inflammatory conditions in the body from allergic rhinitis to acute exacerbations of multiple sclerosis.[L8255] Triamcinolone can be used as a one time adjunct treatment of osteoarthritic knee pain,[L8264] or first line as a topical treatment of corticosteroid responsive dermatoses.[L8249] Triamcinolone is more commonly seen in the forms triamcinolone hexacetonide, triamcinolone acetonide, and triamcinolone diacetate.[L8246,L8249,L8252,L8255,L8258,L8261,L8264]

Triamcinolone was granted FDA approval on 3 December 1957.[L8243] In October 2021, a suspension of triamcinolone acetonide was approved for suprachoroidal injection - the first suprachoroidal injection to receive FDA approval[L38973] - for the treatment of patients with macular edema associated with uveitis.[L38963]

**Indication.** Triamcinolone hexacetonide injections are indicated for intralesional administration in alopecia areata, discoid lupus erythematosus, keloids, and necrobiosis lipoidica diabeticorum.[L8246] This formulation can also be used for localized hypertrophic infiltrated inflammatory lesions of granuloma annulare, lichen planus, lichen simplex chronicus, and psoriatic plaques.[L8246]

Triamcinolone acetonide spray and cream are indicated for the treatment of inflammatory and pruritic manifestations of corticosteroid responsive dermatoses.[L8249,L8258] A triamcinolone acetonide 10mg/mL or 40mg/mL injection is indicated intra-articularly for acute gouty arthritis, acute and subacute bursitis, acute nonspecific tenosynovitis, epicondylitis, rheumatoid arthritis, and synovitis of osteoarthritis.[L8252,L8255] The same 10mg/mL injection is indicated by the intralesional route for the treatment of alopecia areata, discoid lupus erythematosus, keloids, necrobiosis lipoidica diabeticorum, and tumors of an aponeurosis or tendon.[L8252] This formulation can also be used for localized hypertrophic infiltrated inflammatory lesions of granuloma annulare, lichen planus, lichen simplex chronicus, and psoriatic plaques.[L8252] The 40mg/mL injection is indicated intramuscularly for controlling severe allergic conditions such as asthma, atopic dermatitis, contact dermatitis, drug hypersensitivity, perennial or seasonal allergic rhinitis, serum sickness, and transfusion reactions; treatment of bullous dermatitis herpetiformis, exfoliative erythroderma, mycosis fungoides, pemphigus, Stevens-Johnson syndrome, congenital adrenal hyperplasia, hypercalcemia in
cancer, nonsuppurative thyroiditis, autoimmune hemolytic anemia, Diamond-Blackfan anemia, pure red cell aplasia, secondary thrombocytopenia, trichinosis, tuberculous meningitis, acute exacerbations of multiple sclerosis or cerebral edema, sympathetic ophthalmia, temporal arteritis, uveitis, ocular inflammation, berylliosis, idiopathic eosin

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 12:50 | 15:02 | 0/3/0 | 0/0/0 | 0/0/1 | 160,036/13,895 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 7/3 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Beer_2003](drugs/drug_triamcinolone/Triamcinolone_Beer2003_reference.md) | Beer PM et al., Intraocular concentration and pharmacok…, Ophthalmology (2003) | [10.1016/S0161-6420(02)01969-3](https://doi.org/10.1016/S0161-6420(02)01969-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [French_2000](drugs/drug_triamcinolone/Triamcinolone_French2000_reference.md) | French K et al., Pharmacokinetics and metabolic effects…, Journal of veterinary pharm… (2000) | [10.1046/j.1365-2885.2000.00288.x](https://doi.org/10.1046/j.1365-2885.2000.00288.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kraus_2018](drugs/drug_triamcinolone/Triamcinolone_Kraus2018_reference.md) | Kraus VB et al., Synovial and systemic pharmacokinetics…, Osteoarthritis and cartilage (2018) | [10.1016/j.joca.2017.10.003](https://doi.org/10.1016/j.joca.2017.10.003) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HCG22** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Jeong_2015](drugs/drug_triamcinolone/pgx_Jeong_2015_HCG22_Q100.md) | Jeong S et al., Identification of a Novel Mucin Gene HC…, Investigative ophthalmology… (2015) | [10.1167/iovs.14-14803](https://doi.org/10.1167/iovs.14-14803) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 67 matched, 40 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohatagi_1995.pdf` | Rohatagi S et al., Pharmacokinetic and pharmacodynamic eva…, Journal of clinical pharmac… (1995) | popPK | 10 | [10.1002/j.1552-4604.1995.tb04045.x](https://doi.org/10.1002/j.1552-4604.1995.tb04045.x) | [8750370](https://pubmed.ncbi.nlm.nih.gov/8750370) | The title confirms a PK study of triamcinolone acetonide, but the provided evidence contains no numeric parameter values. |
| `Beer_2003.pdf` | Beer PM et al., Intraocular concentration and pharmacok…, Ophthalmology (2003) | popPK | 9 | [10.1016/S0161-6420(02)01969-3](https://doi.org/10.1016/S0161-6420(02)01969-3) | [12689886](https://pubmed.ncbi.nlm.nih.gov/12689886) | The study reports quantitative pharmacokinetic parameters (half-life, AUC, peak concentration) for triamcinolone acetonide in humans, with specific numeric values provided in the text. |
| `French_2000.pdf` | French K et al., Pharmacokinetics and metabolic effects…, Journal of veterinary pharm… (2000) | popPK | 9 | [10.1046/j.1365-2885.2000.00288.x](https://doi.org/10.1046/j.1365-2885.2000.00288.x) | [11107002](https://pubmed.ncbi.nlm.nih.gov/11107002) | The study reports quantitative PK parameters (half-lives, Vss/Vc ratio) for triamcinolone acetonide in horses, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Oishi_2008.pdf` | Oishi M et al., Pharmacokinetic behavior of intravitrea…, Japanese journal of ophthal… (2008) | popPK | 8 | [10.1007/s10384-008-0584-0](https://doi.org/10.1007/s10384-008-0584-0) | [19089571](https://pubmed.ncbi.nlm.nih.gov/19089571) | The study reports quantitative PK parameters (half-life) and a compartmental model for triamcinolone acetonide in rats, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |
| `Yao_2020.pdf` | Yao Q et al., Development and validation of a LC-MS/M…, Journal of pharmaceutical a… (2020) | popPK | 8 | [10.1016/j.jpba.2019.112980](https://doi.org/10.1016/j.jpba.2019.112980) | [31744668](https://pubmed.ncbi.nlm.nih.gov/31744668) | The paper describes a PK study for triamcinolone acetonide in mice using a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Audren_2004.pdf` | Audren F et al., Pharmacokinetic-pharmacodynamic modelin…, Investigative ophthalmology… (2004) | pd | 5 | [10.1167/iovs.03-1110](https://doi.org/10.1167/iovs.03-1110) | [15452046](https://www.ncbi.nlm.nih.gov/pubmed/15452046) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Daley-Yates_2004.pdf` | Daley-Yates PT et al., Relationship between systemic corticost…, Clinical therapeutics (2004) | pd | 5 | [10.1016/j.clinthera.2004.11.017](https://doi.org/10.1016/j.clinthera.2004.11.017) | [15639702](https://www.ncbi.nlm.nih.gov/pubmed/15639702) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Derendorf_1993.pdf` | Derendorf H et al., Receptor-based pharmacokinetic-pharmaco…, Journal of clinical pharmac… (1993) | pd | 5 | [10.1002/j.1552-4604.1993.tb03930.x](https://doi.org/10.1002/j.1552-4604.1993.tb03930.x) | [8440759](https://www.ncbi.nlm.nih.gov/pubmed/8440759) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Meibohm_1999.pdf` | Meibohm B et al., A pharmacokinetic/pharmacodynamic appro…, Journal of pharmacokinetics… (1999) | pd | 5 | [10.1023/a:1020670421957](https://doi.org/10.1023/a:1020670421957) | [10567952](https://www.ncbi.nlm.nih.gov/pubmed/10567952) | metadata signals extractable PD data (PK/PD) |
| `Nakamura_2023.pdf` | Nakamura R et al., Glucocorticoid Dose Dependency on Gene…, The Laryngoscope (2023) | pd | 4 | [10.1002/lary.30330](https://doi.org/10.1002/lary.30330) | [36779842](https://www.ncbi.nlm.nih.gov/pubmed/36779842) | metadata signals extractable PD data (EC50) |
| `Moore_2013.pdf` | Moore CD et al., Metabolic pathways of inhaled glucocort…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.112.046318](https://doi.org/10.1124/dmd.112.046318) | [23143891](https://www.ncbi.nlm.nih.gov/pubmed/23143891) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-10T12:43:36.240971+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Audren_2004 | irrelevant | 0 | 0 | The evidence provided contains only the title of a PK-PD study and lacks any quantitative pharmacokinetic parameter values or model details for triamcinolone. |
| popPK | Boorman_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tissue response to triamcinolone and does not report pharmacokinetic parameters. |
| PGx | Camarini_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes for treating bone lesions and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Daley-Yates_2004 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameter values for triamcinolone. |
| popPK | Derendorf_1993 | irrelevant | 0 | 0 | The provided evidence contains only the title and no quantitative pharmacokinetic parameters or data for triamcinolone. |
| PD | Derendorf_1993 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Gaffin_2023 | irrelevant | 0 | 0 | The study is a longitudinal analysis of lung function determinants in children with asthma, using triamcinolone acetonide only as a diagnostic probe for steroid responsiveness, and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| PGx | García-Martín_2013 | not_relevant | 2 | 1 | The paper is a general review of drug metabolism in allergic diseases and mentions triamcinolone only in the context of metabolic inhibition, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Gerzenstein_2008 | not_relevant | 2 | 0 | The study reports no statistically significant association between glucocorticoid receptor polymorphisms and intraocular pressure response to triamcinolone. |
| PGx | Hagan_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting CYP3A4), not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Katsu_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor activation (EC50) in lungfish, not a pharmacokinetic study reporting disposition parameters like clearance or volume for triamcinolone. |
| popPK | Kelly_1998 | irrelevant | 1 | 0 | The paper is a review discussing relative potency and general PK concepts without reporting specific quantitative disposition parameters (CL, V, etc.) for triamcinolone. |
| PD | Kelly_1998 | not_relevant | 2 | 0 | The text is a qualitative review discussing relative potencies and general dose-response characteristics of inhaled corticosteroids without providing specific numeric PD parameters or extractable concentration-effect curves for triamcinolone. |
| PGx | Leucker_2013 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (fluoxetine inhibiting CYP3A4) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Mager_2002 | irrelevant | 2 | 0 | The paper focuses on QSAR modeling for multiple corticosteroids and does not report specific quantitative PK parameter values (CL, V, etc.) for triamcinolone in the provided evidence. |
| PD | Mager_2002 | not_relevant | 4 | 2 | The paper focuses on QSAR/QSPKR modeling and mentions predicting the time course of triamcinolone effects, but the provided text does not contain specific numeric PD parameters (Emax, EC50) or explicit concentration-effect data points for triamcinolone. |
| PGx | Mathias_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cobicistat inhibiting CYP3A4) affecting triamcinolone PK, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Meibohm_1999 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review/prediction paper and lacks any original quantitative pharmacokinetic parameter values for triamcinolone. |
| PD | Meibohm_1999 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Mohan_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by ritonavir) causing iatrogenic Cushing syndrome, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Moore_2013 | not_relevant | 2 | 5 | The paper studies metabolism by different CYP3A isoforms (CYP3A4/5/7) rather than specific genetic variants/polymorphisms, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Nakamura_2023 | irrelevant | 0 | 0 | The paper title indicates an in-vitro gene expression study, which does not report pharmacokinetic parameters for triamcinolone. |
| PD | Nakamura_2023 | not_relevant | 0 | 0 | The paper investigates gene expression in cell lines (fibroblasts and macrophages) and does not report pharmacokinetic or pharmacodynamic modeling for triamcinolone in a clinical or physiological context. |
| PGx | Nowak-Sliwinska_2013 | not_relevant | 0 | 0 | The paper reviews photodynamic therapy for polypoidal choroidal vasculopathy and does not discuss triamcinolone pharmacogenomics or PK/PD parameters. |
| popPK | Oishi_2008 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) and a compartmental model for triamcinolone acetonide in rats, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |
| PGx | PMID33387367_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for opioids (codeine, tramadol, etc.) and does not mention triamcinolone. |
| PGx | Pavek_2005 | not_relevant | 0 | 0 | The paper studies in vitro transporter interactions (BCRP inhibition) and does not report pharmacogenomic effects of gene variants on triamcinolone PK/PD parameters. |
| popPK | Ponsar_2023 | irrelevant | 0 | 0 | The study focuses on in-vitro drug release kinetics from 3D-printed implants and does not report in-vivo pharmacokinetic parameters (CL, V, ka) for triamcinolone. |
| popPK | Rohatagi_1995 | relevant | 10 | 0 | The title confirms a PK study of triamcinolone acetonide, but the provided evidence contains no numeric parameter values. |
| PD | Rohatagi_1995 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| PGx | Rössner_2018 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (ritonavir inhibiting CYP3A4) causing adrenal insufficiency, not a pharmacogenomic effect of a gene variant on triamcinolone PK/PD. |
| PGx | Wassner_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cobicistat inhibiting CYP3A4) affecting triamcinolone PK, not a pharmacogenomic effect based on a gene variant or genotype. |
| popPK | Weber_2013 | irrelevant | 2 | 0 | The paper describes a simulation tool and model structure for inhaled corticosteroids, but the provided evidence contains no specific quantitative PK parameter values (CL, V, etc.) for triamcinolone. |
| PGx | Wurtz_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of triamcinolone on chromatin structure and MMTV RNA induction in a specific cell line, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yao_2020 | relevant | 8 | 0 | The paper describes a PK study for triamcinolone acetonide in mice using a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | The paper describes an in-vitro cell screening model for glucocorticoid receptor activation and does not report any pharmacokinetic parameters for triamcinolone. |
| PD | Zhang_2008 | not_relevant | 3 | 2 | The paper reports EC50/IC50 values for dexamethasone and PMA in a cell screening model, but only qualitatively states that triamcinolone acetonide activated the response without providing specific numeric PD parameters or concentration-effect data for triamcinolone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_triamcinolone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
