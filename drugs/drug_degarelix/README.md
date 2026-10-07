<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;degarelix&quot;}]"></div>

# degarelix

- **generic name:** degarelix
- **ATC codes:** `L02BX02`
- **DrugBank:** [DB06699](https://go.drugbank.com/drugs/DB06699) · **PubChem:** [CID 16136245](https://pubchem.ncbi.nlm.nih.gov/compound/16136245)
- **molar mass:** 1632.29 g/mol (C82H103ClN18O16) — DrugBank
- **groups:** approved, investigational

## About

Degarelix is a hormone antagonist used to treat prostate cancer. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1182795](https://www.wikidata.org/wiki/Q1182795) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| degarelix | parent | 1632.29 | C82H103ClN18O16 | DrugBank | [16136245](https://pubchem.ncbi.nlm.nih.gov/compound/16136245) | Agersø_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:19 | 0:51 | 0/1/0 | 2/0/0 | 0/0/0 | 16,595/1,629 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Agersø_2003_reference](drugs/drug_degarelix/Degarelix_Agers2003_reference.md) | — | 1-compartment (no model) | 1 | Agersø H et al., The dosing solution influence on the ph…, European journal of pharmac… (2003) | [10.1016/j.ejps.2003.08.001](https://doi.org/10.1016/j.ejps.2003.08.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jadhav_2006_LH](drugs/drug_degarelix/pd_Jadhav_2006_LH.md) | luteinizing hormone ← degarelix · disease-progression model | — | Jadhav PR et al., Semi-mechanistic pharmacodynamic modeli…, Journal of pharmacokinetics… (2006) | [10.1007/s10928-006-9025-1](https://doi.org/10.1007/s10928-006-9025-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tornøe_2007_LH](drugs/drug_degarelix/pd_Torn_e_2007_LH.md) | luteinizing hormone ← degarelix · inhibition effect | — | Tornøe CW et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2006.02820.x](https://doi.org/10.1111/j.1365-2125.2006.02820.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=degarelix) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Agersø_2003.pdf` | Agersø H et al., The dosing solution influence on the ph…, European journal of pharmac… (2003) | popPK | 10 | [10.1016/j.ejps.2003.08.001](https://doi.org/10.1016/j.ejps.2003.08.001) | [14592699](https://pubmed.ncbi.nlm.nih.gov/14592699) | The study reports population PK parameters for degarelix in dogs, with key numeric values like half-life and Cmax in the abstract, though specific CL/V values are likely in the full text/figures not fully detailed in the excerpt. |
| `Tornøe_2004_2.pdf` | Tornøe CW et al., Population pharmacokinetic modeling of…, Pharmaceutical research (2004) | popPK | 10 | [10.1023/b:pham.0000022403.60314.51](https://doi.org/10.1023/b:pham.0000022403.60314.51) | [15139513](https://pubmed.ncbi.nlm.nih.gov/15139513) | The paper is a population PK study of degarelix, but the abstract contains no numeric parameter values, which are likely in the body text or tables not provided in the evidence. |
| `Tornøe_2004.pdf` | Tornøe CW et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of pharmacokinetics… (2004) | popPK | 9 | [10.1007/s10928-005-5911-1](https://doi.org/10.1007/s10928-005-5911-1) | [16222784](https://pubmed.ncbi.nlm.nih.gov/16222784) | The paper describes a population PK/PD study for degarelix, but the evidence text does not contain any numeric parameter values, only a description of the models and methods. |
| `Tornøe_2005.pdf` | Tornøe CW et al., Stochastic differential equations in NO…, Pharmaceutical research (2005) | popPK | 9 | [10.1007/s11095-005-5269-5](https://doi.org/10.1007/s11095-005-5269-5) | [16078134](https://pubmed.ncbi.nlm.nih.gov/16078134) | The paper describes a population PK study of degarelix using SDEs, but the provided evidence contains only the abstract and no specific numeric parameter values. |
| `Jadhav_2006.pdf` | Jadhav PR et al., Semi-mechanistic pharmacodynamic modeli…, Journal of pharmacokinetics… (2006) | popPK | 8 | [10.1007/s10928-006-9025-1](https://doi.org/10.1007/s10928-006-9025-1) | [16967346](https://pubmed.ncbi.nlm.nih.gov/16967346) | The paper reports a two-compartment PK model for degarelix in human males and discusses flip-flop kinetics, but the abstract only provides specific values for LH and Testosterone half-lives, not the quantitative PK parameters (CL, V, Q, ka) for degarelix itself. |

<sub>queue written 2026-10-06T22:19:03.288268+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jadhav_2006 | relevant | 8 | 2 | The paper reports a two-compartment PK model for degarelix in human males and discusses flip-flop kinetics, but the abstract only provides specific values for LH and Testosterone half-lives, not the quantitative PK parameters (CL, V, Q, ka) for degarelix itself. |
| PGx | Sonesson_2011 | not_relevant | 0 | 0 | The paper investigates CYP450 enzyme interactions of degarelix but does not report any effect of genetic variants (pharmacogenomics) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tornøe_2004 | relevant | 9 | 0 | The paper describes a population PK/PD study for degarelix, but the evidence text does not contain any numeric parameter values, only a description of the models and methods. |
| popPK | Tornøe_2004_2 | relevant | 10 | 0 | The paper is a population PK study of degarelix, but the abstract contains no numeric parameter values, which are likely in the body text or tables not provided in the evidence. |
| popPK | Tornøe_2005 | relevant | 9 | 0 | The paper describes a population PK study of degarelix using SDEs, but the provided evidence contains only the abstract and no specific numeric parameter values. |
| popPK | Tornøe_2007 | irrelevant | 1 | 0 | The study models the pharmacodynamics of the HPG axis (LH/Testosterone response) and reports degarelix potency, but does not report population PK parameters (CL, V, ka) for degarelix itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:19 UTC</sub>
