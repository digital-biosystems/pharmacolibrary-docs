<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;}]"></div>

# tolcapone

- **generic name:** tolcapone
- **ATC codes:** `N04BX01`
- **DrugBank:** [DB00323](https://go.drugbank.com/drugs/DB00323) · **PubChem:** [CID 4659569](https://pubchem.ncbi.nlm.nih.gov/compound/4659569)
- **molar mass:** 273.2408 g/mol (C14H11NO5) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Tolcapone is a catechol-O-methyltransferase inhibitor used as an add-on treatment for Parkinson's disease. It remains authorised in the European Union, but its use is restricted because of a boxed warning linked to serious liver safety concerns.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413840](https://www.wikidata.org/wiki/Q413840) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolcapone | parent | 273.241 | C14H11NO5 | DrugBank | [4659569](https://pubchem.ncbi.nlm.nih.gov/compound/4659569) | Jorga_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:32 | 1:14 | 0/2/0 | 2/0/0 | 0/0/0 | 79,762/5,436 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jorga_2000_fluctuator_model](drugs/drug_tolcapone/Tolcapone_Jorga2000_fluctuator_model.md) | — | 3-compartment (no model) | 11 | Jorga K et al., Population pharmacokinetics of tolcapon…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Jorga_2000_non_fluctuator_model](drugs/drug_tolcapone/Tolcapone_Jorga2000_non_fluctuator_model.md) | — | 2-compartment (no model) | 10 | Jorga K et al., Population pharmacokinetics of tolcapon…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dingemanse_1995_2_COMT_activity](drugs/drug_tolcapone/pd_Dingemanse_1995_2_COMT_activity.md) | COMT activity in erythrocytes ← tolcapone · direct Emax (saturable) effect | — | Dingemanse J et al., Integrated pharmacokinetics and pharmac…, Clinical pharmacology and t… (1995) | [10.1016/0009-9236(95)90035-7](https://doi.org/10.1016/0009-9236(95)90035-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Dingemanse_1996_COMT_activity](drugs/drug_tolcapone/pd_Dingemanse_1996_COMT_activity.md) | COMT activity in erythrocytes ← tolcapone · direct Emax (saturable) effect | — | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolcapone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `COMT` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP2C9` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dingemanse_1995.pdf` | Dingemanse J et al., Pharmacokinetic-pharmacodynamic interac…, British journal of clinical… (1995) | popPK | 7 | [10.1111/j.1365-2125.1995.tb05781.x](https://doi.org/10.1111/j.1365-2125.1995.tb05781.x) | [8527287](https://pubmed.ncbi.nlm.nih.gov/8527287) | Tolcapone is the subject drug with human PK reported (tmax 1.5 h, t1/2 2.3 h, dose-proportional kinetics), but no CL/V or model parameters are given numerically in the evidence. |
| `Dingemanse_1995_2.pdf` | Dingemanse J et al., Integrated pharmacokinetics and pharmac…, Clinical pharmacology and t… (1995) | popPK | 7 | [10.1016/0009-9236(95)90035-7](https://doi.org/10.1016/0009-9236(95)90035-7) | [7768073](https://pubmed.ncbi.nlm.nih.gov/7768073) | Human first-in-human PK study of tolcapone with half-life values reported, but no CL/V or full parameter table in the evidence. |
| `Dingemanse_1996.pdf` | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | popPK | 6 | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) | [8739811](https://pubmed.ncbi.nlm.nih.gov/8739811) | Human multiple-dose PK study of tolcapone with metabolite half-life reported, but most numeric parameters (CL, V, Cmax, AUC) are not present in the evidence provided. |

<sub>queue written 2026-10-06T14:31:28.887193+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak_2010 | irrelevant | 1 | 1 | Tolcapone is only a co-administered COMT inhibitor; the PK/PD model concerns levodopa, not tolcapone's own disposition parameters. |
| popPK | Baas_2001 | irrelevant | 2 | 2 | Tolcapone is only a co-administered COMT inhibitor; the PK/PD parameters reported (levodopa AUC, Cmax, EC50) concern levodopa, not tolcapone's own disposition. |
| popPK | Dingemanse_1996 | relevant | 6 | 3 | Human multiple-dose PK study of tolcapone with metabolite half-life reported, but most numeric parameters (CL, V, Cmax, AUC) are not present in the evidence provided. |
| popPK | Gueorguieva_2006 | irrelevant | 4 | 1 | This is an optimal-design methodology paper using a tolcapone IV case study, but no numeric PK parameter values appear in the evidence (they would be in the case-study results not provided). |
| popPK | Jorga_2000_2 | irrelevant | 2 | 3 | The population PK model is of levodopa (and 3-O-methyldopa), with tolcapone only as a co-administered COMT inhibitor; no tolcapone disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:31 UTC</sub>
