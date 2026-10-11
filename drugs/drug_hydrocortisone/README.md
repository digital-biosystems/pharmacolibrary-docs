<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;hydrocortisone&quot;}]"></div>

# hydrocortisone

- **generic name:** hydrocortisone
- **ATC codes:** `A01AC03`, `A07EA02`, `C05AA01`, `D07AA02`, `D07BA04`, `D07CA01`, `D07XA01`, `H02AB09`, `S01BA02`, `S01BB01`, `S01CA03`, `S01CB03`, `S02BA01`, `S02CA03`, `S03CA04`
- **DrugBank:** [DB00741](https://go.drugbank.com/drugs/DB00741) · **PubChem:** [CID 5754](https://pubchem.ncbi.nlm.nih.gov/compound/5754)
- **molar mass:** 362.4599 g/mol (C21H30O5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Hydrocortisone, a glucocorticoid steroid hormone, is used as an anti-inflammatory medicine for conditions such as adrenal insufficiency, congenital adrenal hyperplasia, ulcerative colitis, asthma attacks, and various skin, eye, and ear inflammations. It is widely used and appears on the WHO essential medicines list, with authorised products in the European Union and approved veterinary uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q190875](https://www.wikidata.org/wiki/Q190875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cortisol (hydrocortisone, plasma free cortisol, plasma total cortisol, salivary cortisol) | parent | 362.46 | C21H30O5 | DrugBank | [5754](https://pubchem.ncbi.nlm.nih.gov/compound/5754) | Al-Kofahi_2021, Hamitouche_2017, Melin_2020, Rozenveld_2022, Werumeus_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:14 | 1:20 | 0/3/3 | 0/0/1 | 0/0/0 | 121,493/12,851 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hamitouche_2017_reference](drugs/drug_hydrocortisone/Hydrocortisone_Hamitouche2017_reference.md) | — | 1-compartment (no model) | 2 | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rozenveld_2022_new_model](drugs/drug_hydrocortisone/Hydrocortisone_Rozenveld2022_new_model.md) | — | 1-compartment (no model) | 2 | Rozenveld E et al., Pharmacokinetic Modeling of Hydrocortis…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061161](https://doi.org/10.3390/pharmaceutics14061161) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rozenveld_2022_old_model_5_6](drugs/drug_hydrocortisone/Hydrocortisone_Rozenveld2022_old_model_5_6.md) | — | 1-compartment (no model) | 2 | Rozenveld E et al., Pharmacokinetic Modeling of Hydrocortis…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061161](https://doi.org/10.3390/pharmaceutics14061161) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Al-Kofahi_2021_reference](drugs/drug_hydrocortisone/Hydrocortisone_AlKofahi2021_reference.md) | — | parent + metabolite (no model) | 0 | Al-Kofahi M et al., An integrated PK-PD model for cortisol…, British journal of clinical… (2021) | [10.1111/bcp.14470](https://doi.org/10.1111/bcp.14470) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Melin_2020_reference](drugs/drug_hydrocortisone/Hydrocortisone_Melin2020_reference.md) | — | 1-compartment (no model) | 1 | Melin J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, The Journal of clinical end… (2020) | [10.1210/clinem/dgaa071](https://doi.org/10.1210/clinem/dgaa071) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Werumeus_2017_reference](drugs/drug_hydrocortisone/Hydrocortisone_Werumeus2017_reference.md) | — | general linear (no model) | 3 | Werumeus Buning J et al., Pharmacokinetics of oral hydrocortisone…, Metabolism: clinical and ex… (2017) | [10.1016/j.metabol.2017.02.005](https://doi.org/10.1016/j.metabol.2017.02.005) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hamitouche_2017_urinary_sodium_potassium_ratio](drugs/drug_hydrocortisone/pd_Hamitouche_2017_urinary_sodium_potassium_ratio.md) | urinary sodium/potassium ratio ← hydrocortisone · indirect response — drug inhibits the loss of urinary sodium/potassium ratio | — | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydrocortisone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` substrate | DrugBank actor |
| — | prostate gland | `SRD5A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1D1 (substrate), ANXA1 (target), CYP11B2 (substrate), HSD11B1 (substrate), HSD11B2 (substrate), NR3C1 (target), SERPINA6 (binder), SHBG (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 102 matched, 19 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 0  ·  needs_review 3  ·  rejected 3  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamitouche_2017.pdf` | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) | [28083797](https://pubmed.ncbi.nlm.nih.gov/28083797) | The paper reports quantitative population PK parameters (clearance, half-life) for intravenous hydrocortisone in healthy volunteers. |
| `Melin_2020.pdf` | Melin J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, The Journal of clinical end… (2020) | popPK | 10 | [10.1210/clinem/dgaa071](https://doi.org/10.1210/clinem/dgaa071) | [32052005](https://pubmed.ncbi.nlm.nih.gov/32052005) | The study reports a compartmental PK model for hydrocortisone in humans with specific parameter estimates (bioavailability, IC50) in the abstract, but full clearance/volume values are likely in the results section not fully excerpted here. |
| `Michelet_2020.pdf` | Michelet R et al., Paediatric population pharmacokinetic m…, European journal of endocri… (2020) | popPK | 10 | [10.1530/EJE-20-0231](https://doi.org/10.1530/EJE-20-0231) | [32621587](https://pubmed.ncbi.nlm.nih.gov/32621587) | The paper is a population pharmacokinetic study of hydrocortisone in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Hong_2007.pdf` | Hong Y et al., Population pharmacokinetic/pharmacodyna…, Pharmaceutical research (2007) | popPK | 9 | [10.1007/s11095-006-9232-x](https://doi.org/10.1007/s11095-006-9232-x) | [17385022](https://pubmed.ncbi.nlm.nih.gov/17385022) | The paper describes a population PK/PD study for hydrocortisone, but the specific numeric parameter values are not provided in the extracted evidence. |

<sub>queue written 2026-10-07T19:13:18.611640+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Rayess_2025 | irrelevant | 0 | 0 | The study focuses on anastrozole's effect on height outcomes in CAH patients, with hydrocortisone serving only as a background therapy and covariate, not as the subject of pharmacokinetic analysis. |
| popPK | Bellissant_2000 | irrelevant | 0 | 0 | The study investigates the effect of hydrocortisone on the pharmacodynamic response (mean arterial pressure) to phenylephrine, reporting dose-response curve parameters (Emax, ED50, gamma) rather than pharmacokinetic parameters (CL, V, t1/2) for hydrocortisone. |
| popPK | Bindellini_2025 | relevant | 5 | 1 | The paper reports hydrocortisone pharmacokinetic parameters (CL, Q, Vc) within a population model for CAH patients, but the specific numeric values in the text are garbled and the primary focus is on enzymatic activity estimation rather than PK characterization. |
| popPK | Czock_2005 | irrelevant | 2 | 0 | This is a review article that describes general pharmacokinetic principles for glucocorticoids but does not report specific quantitative parameter values for hydrocortisone. |
| popPK | Glatstein_2022 | irrelevant | 0 | 0 | The study is a clinical case series on snake envenomation treatment where hydrocortisone was used only for allergic reactions, with no pharmacokinetic data reported. |
| popPK | Hong_2007 | relevant | 9 | 0 | The paper describes a population PK/PD study for hydrocortisone, but the specific numeric parameter values are not provided in the extracted evidence. |
| popPK | Lawrence_2022 | irrelevant | 0 | 0 | The study analyzes clinical dosing and biomarker response (17-OHP, D4) in CAH patients but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for hydrocortisone. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | This is a phytochemical study on alkaloids from Nauclea officinalis; hydrocortisone is only used as an in-vitro reference for anti-inflammatory activity and no PK parameters are reported. |
| popPK | Michelet_2020 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of hydrocortisone in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Oosterhuis_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of prednisolone, with hydrocortisone only mentioned as a comparator for potency and endogenous depletion, without reporting PK parameters for hydrocortisone. |
| popPK | Polito_2016 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for fludrocortisone, not hydrocortisone, which is only mentioned as a co-administered drug in the context of septic shock treatment. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic assay (vasoconstrictor assay) assessing potency, not a pharmacokinetic study reporting disposition parameters for hydrocortisone. |
| popPK | Yu_2025 | irrelevant | 1 | 1 | The study focuses on methylprednisolone pharmacokinetics in horses, with hydrocortisone serving only as a pharmacodynamic endpoint for adrenal suppression rather than a subject drug with reported disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:13 UTC</sub>
