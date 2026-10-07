<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;acetazolamide&quot;}]"></div>

# acetazolamide

- **generic name:** acetazolamide
- **ATC codes:** `S01EC01`
- **DrugBank:** [DB00819](https://go.drugbank.com/drugs/DB00819) · **PubChem:** [CID 1986](https://pubchem.ncbi.nlm.nih.gov/compound/1986)
- **molar mass:** 222.245 g/mol (C4H6N4O3S2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Acetazolamide, a carbonic anhydrase inhibitor, is used for glaucoma, epilepsy, and altitude sickness. It is an approved medicine, appears on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413690](https://www.wikidata.org/wiki/Q413690) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acetazolamide | parent | 222.245 | C4H6N4O3S2 | DrugBank | [1986](https://pubchem.ncbi.nlm.nih.gov/compound/1986) | Yano_1998, Yue_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:48 | 2:44 | 0/2/0 | 0/0/3 | 0/0/0 | 178,254/18,148 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yano_1998_reference](drugs/drug_acetazolamide/Acetazolamide_Yano1998_reference.md) | — | 1-compartment (no model) | 1 | Yano I et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1998) | [10.1007/s002280050422](https://doi.org/10.1007/s002280050422) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yue_2013_reference](drugs/drug_acetazolamide/Acetazolamide_Yue2013_reference.md) | — | 2-compartment (no model) | 8 (+1 cov.) | Yue CS et al., Population pharmacokinetic and pharmaco…, Journal of pharmacy & pharm… (2013) | [10.18433/j3qg7z](https://doi.org/10.18433/j3qg7z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Heming_2011_HCO3](drugs/drug_acetazolamide/pd_Heming_2011_HCO3.md) | serum bicarbonate ← acetazolamide · indirect response — drug inhibits the loss of serum bicarbonate | — | Heming N et al., Population pharmacodynamic model of bic…, Critical care (London, Engl… (2011) | [10.1186/cc10448](https://doi.org/10.1186/cc10448) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Heming_2014_Bicar_t](drugs/drug_acetazolamide/pd_Heming_2014_Bicar_t.md) | serum bicarbonate ← acetazolamide · indirect response — drug inhibits the production of serum bicarbonate | — | Heming N et al., Population pharmacodynamic modeling and…, PloS one (2014) | [10.1371/journal.pone.0086313](https://doi.org/10.1371/journal.pone.0086313) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yano_1998_IOP](drugs/drug_acetazolamide/pd_Yano_1998_IOP.md) | intraocular pressure ← acetazolamide · direct Emax (saturable) effect | — | Yano I et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1998) | [10.1007/s002280050422](https://doi.org/10.1007/s002280050422) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acetazolamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AQP1 (inhibitor), CA1 (inhibitor), CA12 (inhibitor), CA14 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CA7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 52 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yano_1998.pdf` | Yano I et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1998) | popPK | 10 | [10.1007/s002280050422](https://doi.org/10.1007/s002280050422) | [9591933](https://pubmed.ncbi.nlm.nih.gov/9591933) | The abstract explicitly provides quantitative pharmacokinetic parameters (clearance, volume of distribution, absorption rate) for acetazolamide derived from a nonlinear mixed-effects model in human patients. |
| `Kunka_1979.pdf` | Kunka RL et al., Nonlinear model for acetazolamide, Journal of pharmaceutical s… (1979) | popPK | 6 | [10.1002/jps.2600680323](https://doi.org/10.1002/jps.2600680323) | [423125](https://pubmed.ncbi.nlm.nih.gov/423125) | The study reports a nonlinear PK model for acetazolamide in rabbits, but no specific numeric parameter values (CL, V, k, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T18:46:20.164550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baird_1989 | irrelevant | 0 | 0 | This is an in-vitro ion transport mechanism study where acetazolamide is used solely as a diagnostic blocker to identify the ion species, with no pharmacokinetic parameters reported. |
| popPK | Brayden_1988 | irrelevant | 0 | 0 | The study investigates ion transport in human sweat gland cultures where acetazolamide is used only as a mechanistic probe to block bicarbonate/CO2 transport, not as the subject of a pharmacokinetic study. |
| popPK | Denner_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of synthetic acetazolamide conjugates for carbonic anhydrase inhibition and cytotoxicity, containing no pharmacokinetic data. |
| popPK | Dogra_2023 | irrelevant | 0 | 0 | This is a neuroimaging study using acetazolamide as a vasodilator/challenge agent to assess cerebrovascular reactivity, not a study of its pharmacokinetic parameters. |
| popPK | Heming_2011 | relevant | 4 | 0 | The study is a population pharmacodynamic model that fixes the acetazolamide elimination half-life at 6 hours based on literature but does not report estimated quantitative PK parameters (CL, V) in the provided text. |
| popPK | Heming_2014 | irrelevant | 2 | 0 | This is a pharmacodynamic modeling study (respiratory effect) for which the pharmacokinetics were assumed using a fixed half-life (6h) from literature, rather than reporting estimated quantitative PK parameters (CL, V) for acetazolamide. |
| popPK | Ishii_2020 | irrelevant | 0 | 0 | The study uses acetazolamide as a vasodilator challenge agent to measure cerebral blood flow and cerebrovascular reactivity, not to characterize the pharmacokinetics of acetazolamide. |
| popPK | Kunka_1979 | irrelevant | 6 | 0 | The study reports a nonlinear PK model for acetazolamide in rabbits, but no specific numeric parameter values (CL, V, k, etc.) are present in the provided evidence. |
| popPK | Lahiri_1982 | irrelevant | 0 | 0 | The study focuses on carotid body chemoreceptor physiology in cats, using acetazolamide as a pharmacological tool (carbonic anhydrase inhibitor) rather than as the subject of pharmacokinetic analysis. |
| popPK | Nishimura_1988 | irrelevant | 0 | 0 | The study investigates chloride outflux from cerebrospinal fluid using acetazolamide as a pharmacological inhibitor, rather than measuring pharmacokinetic parameters for acetazolamide itself. |
| popPK | Segeroth_2023 | irrelevant | 0 | 0 | Acetazolamide is used as a comparator/anesthetic adjunct to manipulate CSF production, not as the subject drug for PK parameter estimation. |
| popPK | Shitov_2009 | irrelevant | 0 | 0 | The paper studies manganese-dependent carbonic anhydrase activity in photosystem II proteins from pea leaves, using acetazolamide only as an insensitive inhibitor, and reports no pharmacokinetic parameters. |
| popPK | Teppema_1999 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of acetazolamide on ventilatory control (CO2 sensitivity and acidosis) rather than its pharmacokinetic disposition parameters (CL, Vd). |
| popPK | Torring_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasodilation in porcine retinal arterioles and does not report pharmacokinetic parameters for acetazolamide. |
| popPK | Valero_2006 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of chloride transport inhibitors on vasorelaxation, where acetazolamide serves as a tool compound, not a subject of pharmacokinetic analysis. |
| popPK | Wood_2022 | irrelevant | 1 | 0 | Acetazolamide is used as a CSF-flow modulator to enhance the pharmacokinetics of temozolomide, and no quantitative PK parameters for acetazolamide itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:46 UTC</sub>
