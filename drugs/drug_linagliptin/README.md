<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;}]"></div>

# linagliptin

- **generic name:** linagliptin
- **ATC codes:** `A10BD11`, `A10BD19`, `A10BD27`, `A10BH05`
- **DrugBank:** [DB08882](https://go.drugbank.com/drugs/DB08882) · **PubChem:** [CID 10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344)
- **molar mass:** 472.5422 g/mol (C25H28N8O2) — DrugBank
- **groups:** approved, investigational

## About

Linagliptin is a DPP-4 inhibitor used to lower blood sugar in adults with type 2 diabetes, available alone or in fixed oral combinations with other glucose-lowering drugs. It is approved and authorised in the European Union and is widely used as an oral anti-diabetic medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q909745](https://www.wikidata.org/wiki/Q909745) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| linagliptin | parent | 472.542 | C25H28N8O2 | DrugBank | [10096344](https://pubchem.ncbi.nlm.nih.gov/compound/10096344) | Graefe-Mody_2012, Retlich_2015, Tadayasu_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:29 | 12:48 | 0/3/0 | 2/0/0 | 0/0/0 | 193,414/41,022 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Graefe-Mody_2012_reference](drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md) | — | 1-compartment (no model) | 6 | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.409). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Retlich_2015_reference](drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md) | — | 2-compartment (no model) | 11 | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.85). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tadayasu_2013_reference](drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md) | — | 1-compartment (no model) | 8 | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Retlich_2015_DPP_4_activity](drugs/drug_linagliptin/pd_Retlich_2015_DPP_4_activity.md) | plasma DPP-4 activity ← linagliptin · direct sigmoid Emax (Hill) effect | — | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span> | [Tadayasu_2013_DPP_4_inhibition](drugs/drug_linagliptin/pd_Tadayasu_2013_DPP_4_inhibition.md) | DPP-4 inhibition ← linagliptin · target-mediated drug disposition | — | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=linagliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graefe-Mody_2012.pdf` | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | popPK | 9 | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) | [22568694](https://pubmed.ncbi.nlm.nih.gov/22568694) | The text provides quantitative PK parameters (Cmax, AUC, half-life, bioavailability, protein binding) for linagliptin in humans, though specific clearance (CL) and volume (V) values are described qualitatively or via model description rather than explicit numeric constants. |
| `Wright_2012.pdf` | Wright S et al., The concentration-dependent binding of…, International journal of cl… (2012) | popPK | 9 | [10.5414/cp201630](https://doi.org/10.5414/cp201630) | [22541836](https://pubmed.ncbi.nlm.nih.gov/22541836) | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-05T00:16:56.255158+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wright_2012 | relevant | 9 | 0 | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 00:17 UTC</sub>
