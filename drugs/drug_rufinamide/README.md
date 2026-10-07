<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;rufinamide&quot;}]"></div>

# rufinamide

- **generic name:** rufinamide
- **ATC codes:** `N03AF03`
- **DrugBank:** [DB06201](https://go.drugbank.com/drugs/DB06201) · **PubChem:** [CID 129228](https://pubchem.ncbi.nlm.nih.gov/compound/129228)
- **molar mass:** 238.1935 g/mol (C10H8F2N4O) — DrugBank
- **groups:** approved

## About

Rufinamide is an anticonvulsant used to treat epilepsy. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408565](https://www.wikidata.org/wiki/Q408565) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rufinamide | parent | 238.194 | C10H8F2N4O | DrugBank | [129228](https://pubchem.ncbi.nlm.nih.gov/compound/129228) | Arzimanoglou_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:44 | 0:30 | 0/0/1 | 0/0/0 | 0/0/0 | 53,498/3,014 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arzimanoglou_2016_reference](drugs/drug_rufinamide/Rufinamide_Arzimanoglou2016_reference.md) | — | 1-compartment (no model) | 1 | Arzimanoglou A et al., Safety and pharmacokinetic profile of r…, European journal of paediat… (2016) | [10.1016/j.ejpn.2015.12.015](https://doi.org/10.1016/j.ejpn.2015.12.015) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rufinamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2E1` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GRM5 (inhibitor), SCN9A (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arzimanoglou_2016.pdf` | Arzimanoglou A et al., Safety and pharmacokinetic profile of r…, European journal of paediat… (2016) | popPK | 9 | [10.1016/j.ejpn.2015.12.015](https://doi.org/10.1016/j.ejpn.2015.12.015) | [26805435](https://pubmed.ncbi.nlm.nih.gov/26805435) | The paper reports a population PK analysis for rufinamide and provides the specific apparent clearance (CL/F) value of 2.19 L/h in the text. |
| `Xu_2016.pdf` | Xu M et al., Pharmacokinetics and Tolerability of Ru…, European journal of drug me… (2016) | popPK | 9 | [10.1007/s13318-015-0291-4](https://doi.org/10.1007/s13318-015-0291-4) | [26294172](https://pubmed.ncbi.nlm.nih.gov/26294172) | The study reports quantitative PK parameters for rufinamide, but specific values for clearance (CL), volume (V), and half-life (t1/2) are not explicitly listed in the provided text, only exposure metrics (Cmax, AUC). |
| `Perucca_2008.pdf` | Perucca E et al., Rufinamide: clinical pharmacokinetics a…, Epilepsia (2008) | popPK | 8 | [10.1111/j.1528-1167.2008.01665.x](https://doi.org/10.1111/j.1528-1167.2008.01665.x) | [18503564](https://pubmed.ncbi.nlm.nih.gov/18503564) | The paper is a clinical pharmacokinetic review that describes rufinamide's PK parameters (half-life, CL/F, Vd/F) and mentions population modeling, but it provides only qualitative ranges or qualitative descriptions rather than a full table of specific quantitative numeric parameter values for direct extraction. |

<sub>queue written 2026-10-07T07:44:12.629715+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chuang_2021 | irrelevant | 0 | 0 | The paper is an electrophysiological study on apocynin's effect on ion channels, and rufinamide is only used as a co-administered inhibitor to demonstrate attenuation of current, not as a subject for PK analysis. |
| popPK | Marchand_2010 | irrelevant | 3 | 0 | The paper is a simulation study based on pre-existing PK parameters, and no specific numeric rufinamide PK parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Perucca_2008 | relevant | 8 | 4 | The paper is a clinical pharmacokinetic review that describes rufinamide's PK parameters (half-life, CL/F, Vd/F) and mentions population modeling, but it provides only qualitative ranges or qualitative descriptions rather than a full table of specific quantitative numeric parameter values for direct extraction. |
| popPK | Xu_2016 | relevant | 9 | 4 | The study reports quantitative PK parameters for rufinamide, but specific values for clearance (CL), volume (V), and half-life (t1/2) are not explicitly listed in the provided text, only exposure metrics (Cmax, AUC). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:44 UTC</sub>
