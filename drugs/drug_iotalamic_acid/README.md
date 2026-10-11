<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iotalamic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IotalamicAcid_Shin2015_reference&quot;,&quot;label&quot;:&quot;Shin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iotalamic_acid/IotalamicAcid_Shin2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# iotalamic acid

- **generic name:** iotalamic acid
- **ATC codes:** `V08AA04`
- **DrugBank:** [DB09133](https://go.drugbank.com/drugs/DB09133) · **PubChem:** not captured
- **groups:** approved

## About

Iothalamic acid is an iodinated X-ray contrast agent used to improve imaging in radiographic examinations. It is an approved water-soluble, high-osmolar contrast medium, though it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6064129](https://www.wikidata.org/wiki/Q6064129) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iotalamic_acid (iothalamic acid) | metabolite | 613.903 | C11H9I3N2O4 | PubChem | [3737](https://pubchem.ncbi.nlm.nih.gov/compound/3737) | Bäck_1988, Groth_1978 |
| sodium iothalamate | metabolite | 635.885 | C11H8I3N2NaO4 | PubChem | [23667529](https://pubchem.ncbi.nlm.nih.gov/compound/23667529) | Groth_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:46 | 36:14 | 1/3/5 | 0/0/0 | 0/0/0 | 753,539/41,732 | ollama / glm-5.3-flash | 17 | 7/10 | 15/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Shin_2015_reference](drugs/drug_iotalamic_acid/IotalamicAcid_Shin2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Shin JE et al., Usefulness of serum cystatin C to deter…, Korean journal of pediatrics (2015) | [10.3345/kjp.2015.58.11.421](https://doi.org/10.3345/kjp.2015.58.11.421) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Bäck_1988_reference](drugs/drug_iotalamic_acid/IotalamicAcid_Bck1988_reference.md) | — | 1-compartment (no model) | 2 | Bäck SE et al., Contrast media as markers for glomerula…, Scandinavian journal of cli… (1988) | [10.3109/00365518809167491](https://doi.org/10.3109/00365518809167491) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_1](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_1.md) | — | 1-compartment (no model) | 5 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_2](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_2.md) | — | 1-compartment (no model) | 5 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_3](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_3.md) | — | 1-compartment (no model) | 5 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Naber_1989_reference](drugs/drug_iotalamic_acid/IotalamicAcid_Naber1989_reference.md) | — | 1-compartment (no model) | 2 | Naber KG et al., [Enoxacin concentration in seminal flui…, Infection 17 Suppl (1989) | [10.1007/BF01643634](https://doi.org/10.1007/BF01643634) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_4](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_4.md) | — | 1-compartment (no model) | 6 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_5](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_5.md) | — | 2-compartment (no model) | 7 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Groth_1978_case_6](drugs/drug_iotalamic_acid/IotalamicAcid_Groth1978_case_6.md) | — | 2-compartment (no model) | 8 | Groth T et al., The usefulness of 125I-sodium lothalama…, Upsala journal of medical s… (1978) | [10.3109/03009737809179113](https://doi.org/10.3109/03009737809179113) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iotalamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 49 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 9  ·  extracted 1  ·  needs_review 5  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bäck_1988.pdf` | Bäck SE et al., Contrast media as markers for glomerula…, Scandinavian journal of cli… (1988) | popPK | 8 | [10.3109/00365518809167491](https://doi.org/10.3109/00365518809167491) | [3375780](https://pubmed.ncbi.nlm.nih.gov/3375780) | Population-relevant PK clearance values for iothalamate (144 ml/min) are reported directly in the abstract for healthy human volunteers. |
| `Welling_1976.pdf` | Welling PG et al., Pharmacokinetics of 125I-iothalamate an…, Journal of clinical pharmac… (1976) | popPK | 8 | [10.1002/j.1552-4604.1976.tb02395.x](https://doi.org/10.1002/j.1552-4604.1976.tb02395.x) | [1254735](https://pubmed.ncbi.nlm.nih.gov/1254735) | Iothalamate (iotalamic acid) is the subject drug studied with two-compartment PK in humans, but no numeric parameter values appear in the evidence provided. |

<sub>queue written 2026-10-07T23:14:46.091219+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acharya_1997 | irrelevant | 0 | 2 | Iotalamic acid (iothalamate) is only used as a GFR diagnostic marker; the PK parameters reported are for chloramphenicol, not iotalamic acid. |
| PGx | Beringer_2008 | not_relevant | 3 | 3 | The ABCB1 genotype effect is reported for dicloxacillin renal clearance; iothalamate was only a GFR marker with no pharmacogenomic effect reported. |
| popPK | Chang_2023 | irrelevant | 0 | 0 | The study concerns vancomycin/piperacillin-tazobactam nephrotoxicity in rats; iohexol is only a GFR marker and iotalamic acid is not the subject drug, with no PK parameters for it reported. |
| PGx | Chen_2010 | not_relevant | 2 | 4 | KCNMB1 Glu65Lys affects GFR (measured partly by iothalamate clearance), but this is an endogenous renal function trait, not a drug PK/PD parameter of iothalamic acid itself. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | This is a hematocrit/eGFR study using iothalamate only as a GFR marker, with no PK parameters for iotalamic acid. |
| popPK | De_2022 | irrelevant | 1 | 1 | Iothalamate appears only as an exogenous GFR probe substrate in a cystic fibrosis meta-analysis of other drugs' disposition; no PK parameters for iothalamate itself are reported. |
| popPK | Ebert_2024 | irrelevant | 0 | 0 | This is a consensus paper on iohexol plasma clearance for GFR measurement; iotalamic acid is not the subject drug and no PK parameters for it are reported. |
| popPK | Gaspari_1997 | irrelevant | 3 | 0 | Iothalamate is used only as an exogenous GFR filtration marker; no quantitative PK parameters (CL, V, half-life) for the drug itself are reported, and no numeric values appear in the evidence. |
| popPK | Gaspari_1998 | irrelevant | 2 | 0 | Iothalamate is used only as a diagnostic GFR filtration marker; no quantitative PK parameters (CL, V, half-life) for it are reported, and no numeric values appear in the evidence. |
| popPK | Groothof_2025 | irrelevant | 0 | 0 | This is a perspective article on tolvaptan and eGFR bias in ADPKD; iotalamic_acid is not studied and no PK disposition parameters appear. |
| popPK | Groothuis_1990 | irrelevant | 3 | 2 | Iothalamate is used only as a diagnostic tracer for BBB permeability in dogs; no numeric PK disposition values (CL, V, half-life) are given in the evidence. |
| popPK | Groothuis_1991 | irrelevant | 3 | 5 | Iothalamate is used only as a CT contrast/diagnostic tracer for blood-brain barrier transport, not as a subject drug with disposition PK parameters. |
| popPK | Groothuis_1991_2 | irrelevant | 2 | 6 | Iothalamate is used only as an iodinated CT contrast tracer to measure blood-brain tumor transcapillary transport constants (K1, k2, Vp), not as a subject drug with disposition PK parameters like CL or Vd. |
| popPK | Hall_1977 | irrelevant | 3 | 2 | Iothalamate is used only as a diagnostic GFR marker in dogs; no clearance/volume disposition parameters for iothalamate itself are reported, and any compartmental values are not given numerically. |
| popPK | Hamrén_2012 | irrelevant | 0 | 0 | Iothalamate is only used as a diagnostic GFR marker; the PK model is for tesaglitazar, not iotalamic acid. |
| popPK | Harris_1975 | relevant | 4 | 6 | Iothalamate PK (two-compartment kinetics, Vd values) is reported in chickens, but it is used as an ECFV indicator rather than a drug disposition study; numeric Vd and kinetic equation are present in text. |
| popPK | Hooper_2025 | irrelevant | 0 | 0 | The study models iohexol and iopamidol PK; iothalamate (iotalamic acid) is only mentioned as a listed filtration marker, with no PK parameters for it. |
| popPK | Hu_2012 | irrelevant | 0 | 0 | Iothalamate is used only as a GFR measurement tracer; no pharmacokinetic disposition parameters for the drug are reported. |
| popPK | Jiang_2019 | irrelevant | 2 | 2 | Iothalamate is used only as a GFR reference marker (and iopamidol as CT contrast); no PK disposition parameters (CL, V, ka, compartmental model) for iotalamic acid itself are reported, though iothalamate clearance GFR values are present in text. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | Review of iodine-124 radiochemistry and immunoPET; iotalamic acid only mentioned as 125I-iothalamate GFR agent, no PK parameters. |
| popPK | Li_2012 | irrelevant | 0 | 0 | This is a BOLD MRI contrast-nephropathy study in rats; iothalamate is only a co-administered contrast agent with no PK parameters reported. |
| popPK | Naber_1989 | irrelevant | 3 | 6 | Ioxitalamic acid is only a co-administered GFR/urine-contamination marker in an enoxacin study, though some of its PK values (Vd 15.7 L, CL 82.4 ml/min, t½ 2.61 h) do appear in the text/table. |
| popPK | Nossen_1995 | irrelevant | 1 | 0 | Iotalamic (iothalamate) acid appears only as a radiolabelled GFR marker; the PK parameters reported are for iodixanol and iohexol, not iotalamic acid. |
| popPK | OHanlon_2023 | irrelevant | 0 | 0 | Iothalamate is mentioned only as a GFR measurement marker; the paper models creatinine/GFR, not iothalamic acid pharmacokinetics, and no PK parameters for it appear. |
| popPK | Ohashi_1996 | irrelevant | 0 | 0 | The evidence contains only a GROBID header with no actual paper text, parameters, or drug information. |
| PGx | Reznichenko_2013 | not_relevant | 0 | 0 | Iothalamate is used only as a GFR measurement tracer, not as a drug with pharmacogenomically altered PK/PD parameters. |
| popPK | Rocco_1996 | irrelevant | 0 | 0 | The study's subject drug is iohexol for GFR measurement; iotalamic acid (iothalamate) appears only as a comparator clearance method, with no PK parameters for it reported. |
| PGx | Rosenthal_2004 | not_relevant | 0 | 0 | Iothalamate clearance is a renal function measure, not a drug PK/PD parameter affected by the GLA genotype; no pharmacogenomic drug effect reported. |
| popPK | Shin_2015 | irrelevant | 0 | 0 | The paper reports vancomycin PK in neonates; iothalamic acid is only mentioned as a GFR gold-standard reference, not the subject drug. |
| popPK | Takita_2020 | irrelevant | 0 | 0 | The paper models creatinine and transporter inhibitors (trimethoprim, cimetidine, famotidine); iothalamate appears only as an exogenous GFR marker, with no PK parameters for iotalamic acid itself. |
| popPK | Toto_1995 | irrelevant | 0 | 0 | This is a blood pressure/GFR progression trial using iothalamate only as a GFR marker, with no PK parameters for the drug. |
| PGx | Vera_2010 | not_relevant | 0 | 0 | Iothalamate is only a GFR tracer; no gene variant effect on its PK/PD is reported. |
| popPK | Viberg_2006 | irrelevant | 0 | 0 | The paper reports population PK parameters for cefuroxime, not iotalamic acid; iotalamic acid is not mentioned. |
| popPK | Warnke_1993 | irrelevant | 1 | 2 | Iothalamate is only a CT contrast tracer for BBB permeability (K1/K2 transport constants), not a PK study of iothalamic acid disposition; no CL/V/ka parameters. |
| popPK | Welling_1976 | relevant | 8 | 2 | Iothalamate (iotalamic acid) is the subject drug studied with two-compartment PK in humans, but no numeric parameter values appear in the evidence provided. |
| popPK | Wright_2001 | irrelevant | 0 | 0 | The paper models 51Cr-EDTA (a GFR marker) in cancer patients; iotalamic acid is not the subject drug and no parameters for it appear. |
| popPK | Zietse_1995 | irrelevant | 2 | 1 | Iothalamate is used only as a diagnostic clearance marker for GFR/ERPF measurement, not as a subject drug with reported disposition parameters, and no numeric PK values appear in the evidence. |
| popPK | van_2021 | irrelevant | 1 | 1 | Iothalamate is used only as a diagnostic tracer to measure GFR/ECFV; no PK disposition parameters (CL, V, model) for the drug itself are reported. |
| popPK | van_2021_2 | irrelevant | 0 | 0 | The drug studied is iohexol, not iotalamic acid; iotalamic acid is not the subject of this PK study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:14 UTC</sub>
