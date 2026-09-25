<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;eslicarbazepine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eslicarbazepine_Falco2012_reference&quot;,&quot;label&quot;:&quot;Falc\u00e3o_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eslicarbazepine/Eslicarbazepine_Falco2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eslicarbazepine_Sunkaraneni2018v2_reference&quot;,&quot;label&quot;:&quot;Sunkaraneni_2018_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eslicarbazepine

- **generic name:** eslicarbazepine
- **ATC codes:** `N03AF04`
- **DrugBank:** [DB14575](https://go.drugbank.com/drugs/DB14575)
- **groups:** approved

## About

**Description.** Eslicarbazepine is an anti-epileptic medication available commercially as [eslicarbazepine acetate].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 17:34 | 1:49 | 1/0/1 | 0/0/0 | 0/0/0 | 45,585/3,292 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Falcão_2012_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Falco2012_reference.md) | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Sunkaraneni_2018_2_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md) | Sunkaraneni (2018) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eslicarbazepine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: P2RX4 (unknown), SCN11A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | popPK | 10 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://pubmed.ncbi.nlm.nih.gov/22171585) | The paper is a population PK study for eslicarbazepine and explicitly provides the quantitative clearance equation and base value (2.36 L/h) in the text. |
| `Gidal_2018.pdf` | Gidal BE et al., Exposure-safety and efficacy response r…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12950](https://doi.org/10.1111/ane.12950) | [29732549](https://pubmed.ncbi.nlm.nih.gov/29732549) | The paper describes a population PK study for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sunkaraneni_2018.pdf` | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) | [29528499](https://pubmed.ncbi.nlm.nih.gov/29528499) | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sunkaraneni_2018_3.pdf` | Sunkaraneni S et al., Population Pharmacokinetic Evaluation a…, Clinical pharmacology in dr… (2018) | popPK | 9 | [10.1002/cpdd.382](https://doi.org/10.1002/cpdd.382) | [28881418](https://pubmed.ncbi.nlm.nih.gov/28881418) | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-09-21T17:33:15.693820+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gidal_2018 | relevant | 10 | 0 | The paper describes a population PK study for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The paper is a simulation study using existing population PK models for 14 drugs, including eslicarbazepine, but does not report original quantitative PK parameter values (CL, V, etc.) for eslicarbazepine in the provided evidence. |
| popPK | Sunkaraneni_2017 | irrelevant | 2 | 0 | The paper is a modeling and simulation study using a previously developed PK model, and it does not report original quantitative PK parameter values (CL, V, etc.) for eslicarbazepine in the provided evidence. |
| popPK | Sunkaraneni_2018 | relevant | 10 | 0 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Sunkaraneni_2018_3 | relevant | 9 | 0 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 17:33 UTC</sub>
