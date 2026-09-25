<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;linagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Linagliptin_Retlich2015_reference&quot;,&quot;label&quot;:&quot;Retlich_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_GraefeMody2012_reference&quot;,&quot;label&quot;:&quot;Graefe-Mody_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Linagliptin_Tadayasu2013_reference&quot;,&quot;label&quot;:&quot;Tadayasu_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# linagliptin

- **generic name:** linagliptin
- **ATC codes:** `A10BD11`, `A10BD19`, `A10BD27`, `A10BH05`
- **DrugBank:** [DB08882](https://go.drugbank.com/drugs/DB08882)
- **groups:** approved, investigational

## About

**Description.** Linagliptin is a DPP-4 inhibitor developed by Boehringer Ingelheim for the treatment of type II diabetes [L9557]. Linagliptin differs from other DPP-4 inhibitors in that it has a non-linear pharmacokinetic profile, is not primarily eliminated by the renal system, and obeys concentration dependant protein binding[A37050]. Linagliptin was approved by the FDA on May 2, 2011[L9557].

**Indication.** Linagliptin is indicated for the treatment of type II diabetes in addition to diet and exercise[L9557]. It should not be used to treat type I diabetes or in diabetic ketoacidosis.[L9557] An extended-release combination product containing empagliflozin, linagliptin, and metformin was approved by the FDA in January 2020 for the improvement of glycemic control in adults with type 2 diabetes mellitus when used adjunctively with diet and exercise.[L11479]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 08:21 | 4:58 | 0/2/1 | 2/0/0 | 0/0/0 | 156,241/4,788 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q95, Q303, Q69, Q61, Q32, Q331…</sub><br><sub>route_to: `human_review`</sub> | [Retlich_2015_reference](drugs/drug_linagliptin/Linagliptin_Retlich2015_reference.md) | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Graefe-Mody_2012_reference](drugs/drug_linagliptin/Linagliptin_GraefeMody2012_reference.md) | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tadayasu_2013_reference](drugs/drug_linagliptin/Linagliptin_Tadayasu2013_reference.md) | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tadayasu_2013](drugs/drug_linagliptin/pd_Tadayasu_2013_DPP_4_inhibition.md) | Tadayasu Y et al., Population pharmacokinetic/pharmacodyna…, Journal of pharmacy & pharm… (2013) | [10.18433/j3s304](https://doi.org/10.18433/j3s304) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Retlich_2015](drugs/drug_linagliptin/pd_Retlich_2015_DPP_4.md) | Retlich S et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0232-4](https://doi.org/10.1007/s40262-014-0232-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=linagliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>“…An oral dose of linagliptin is excreted primarily in the feces[A176948]. 90% of an oral do…”</sub> | prose |
| metabolism | kidney | <sub>“…[A176948]. 90% of an oral dose is excreted unchanged in the urine and feces[A176948,A37050…”</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…84.7% of linagliptin is eliminated in the feces and 5.4% is eliminated in the urine[A17694…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graefe-Mody_2012.pdf` | Graefe-Mody U et al., Clinical pharmacokinetics and pharmacod…, Clinical pharmacokinetics (2012) | popPK | 9 | [10.2165/11630900-000000000-00000](https://doi.org/10.2165/11630900-000000000-00000) | [22568694](https://pubmed.ncbi.nlm.nih.gov/22568694) | The text provides specific quantitative PK parameters for linagliptin, including half-life (&gt;100 h), bioavailability (~30%), and steady-state concentrations, derived from a two-compartmental model. |
| `Wright_2012.pdf` | Wright S et al., The concentration-dependent binding of…, International journal of cl… (2012) | popPK | 8 | [10.5414/cp201630](https://doi.org/10.5414/cp201630) | [22541836](https://pubmed.ncbi.nlm.nih.gov/22541836) | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-09-22T08:16:34.745739+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wright_2012 | relevant | 8 | 0 | The paper describes a population PK model for linagliptin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 08:16 UTC</sub>
