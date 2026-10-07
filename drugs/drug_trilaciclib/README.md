<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;trilaciclib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trilaciclib_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trilaciclib

- **generic name:** trilaciclib
- **ATC codes:** `V03AF12`
- **DrugBank:** [DB15442](https://go.drugbank.com/drugs/DB15442) · **PubChem:** not captured
- **molar mass:** 446.559 g/mol (C24H30N8O) — DrugBank
- **groups:** approved, investigational

## About

Trilaciclib is a kinase inhibitor used in patients with small cell lung cancer, where it acts as a detoxifying agent for antineoplastic treatment. It is an approved drug, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105592965](https://www.wikidata.org/wiki/Q105592965) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trilaciclib | parent | 446.559 | C24H30N8O | DrugBank | — | Dai_2024, Li_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:03 | 2:22 | 1/0/1 | 1/0/0 | 0/0/0 | 66,266/11,203 | ollama / glm-5.3-flash | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2022_reference](drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li C et al., Pharmacokinetic Drug-Drug Interaction S…, Clinical drug investigation (2022) | [10.1007/s40261-022-01179-x](https://doi.org/10.1007/s40261-022-01179-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Dai_2024_reference](drugs/drug_trilaciclib/Trilaciclib_Dai2024_reference.md) | — | 2-compartment (no model) | 6 (+1 cov.) | Dai HR et al., Trilaciclib dosage in Chinese patients…, Acta pharmacologica Sinica (2024) | [10.1038/s41401-024-01297-6](https://doi.org/10.1038/s41401-024-01297-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_antitumour_efficacy](drugs/drug_trilaciclib/pd_Li_2023_antitumour_efficacy.md) | antitumour efficacy ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_headache](drugs/drug_trilaciclib/pd_Li_2023_headache.md) | headache ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_injection_site_reactions](drugs/drug_trilaciclib/pd_Li_2023_injection_site_reactions.md) | injection site reactions ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_myeloprotective_efficacy_myelosuppression_endpoints](drugs/drug_trilaciclib/pd_Li_2023_myeloprotective_efficacy_myelosuppression_endpoints.md) | myeloprotective efficacy (myelosuppression endpoints) ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023_phlebitis_thrombophlebitis](drugs/drug_trilaciclib/pd_Li_2023_phlebitis_thrombophlebitis.md) | phlebitis/thrombophlebitis ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2023_time_to_event_safety_efficacy_endpoints](drugs/drug_trilaciclib/pd_Li_2023_time_to_event_safety_efficacy_endpoints.md) | time-to-event safety/efficacy endpoints ← trilaciclib · time-to-event model | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trilaciclib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CDK2 (inhibitor), CDK4 (inhibitor), CDK5 (inhibitor), CDK6 (inhibitor), CDK7 (inhibitor), CDK9 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) | [36180417](https://pubmed.ncbi.nlm.nih.gov/36180417) | Population PK (three-compartment) of trilaciclib in humans, but no numeric parameter values (CL, V, Q) appear in the evidence — likely in tables/supplement not provided. |
| `Cheng_2024.pdf` | Cheng Y et al., Myeloprotection with trilaciclib in Chi…, Lung cancer (Amsterdam, Net… (2024) | popPK | 7 | [10.1016/j.lungcan.2023.107455](https://doi.org/10.1016/j.lungcan.2023.107455) | [38224653](https://pubmed.ncbi.nlm.nih.gov/38224653) | PK of trilaciclib was a primary endpoint with NCA analysis, but no numeric parameter values (CL, V, t½) appear in the evidence provided. |
| `Li_2024.pdf` | Li C et al., Effect of Hepatic Impairment on Trilaci…, Journal of clinical pharmac… (2024) | popPK | 7 | [10.1002/jcph.2435](https://doi.org/10.1002/jcph.2435) | [38639103](https://pubmed.ncbi.nlm.nih.gov/38639103) | A dedicated trilaciclib PK study in hepatic impairment, but the evidence gives only relative exposure changes (% higher AUC) without numeric CL/V or compartmental parameter values, which may be in tables/figures not provided. |

<sub>queue written 2026-10-07T20:00:58.827473+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2024 | relevant | 7 | 2 | PK of trilaciclib was a primary endpoint with NCA analysis, but no numeric parameter values (CL, V, t½) appear in the evidence provided. |
| popPK | Li_2023 | relevant | 10 | 2 | Population PK (three-compartment) of trilaciclib in humans, but no numeric parameter values (CL, V, Q) appear in the evidence — likely in tables/supplement not provided. |
| popPK | Li_2024 | relevant | 7 | 3 | A dedicated trilaciclib PK study in hepatic impairment, but the evidence gives only relative exposure changes (% higher AUC) without numeric CL/V or compartmental parameter values, which may be in tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 20:01 UTC</sub>
