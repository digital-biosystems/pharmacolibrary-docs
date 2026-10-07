<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;vigabatrin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vigabatrin_Ounissi2019_reference&quot;,&quot;label&quot;:&quot;Ounissi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vigabatrin

- **generic name:** vigabatrin
- **ATC codes:** `N03AG04`
- **DrugBank:** [DB01080](https://go.drugbank.com/drugs/DB01080) · **PubChem:** [CID 5665](https://pubchem.ncbi.nlm.nih.gov/compound/5665)
- **molar mass:** 129.157 g/mol (C6H11NO2) — DrugBank
- **groups:** approved, investigational

## About

Vigabatrin is an antiepileptic drug used to treat epilepsy, including infantile spasms and partial seizures. It is authorised in the European Union, where its use is limited to these specific seizure types.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421663](https://www.wikidata.org/wiki/Q421663) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vigabatrin | parent | 129.157 | C6H11NO2 | DrugBank | [5665](https://pubchem.ncbi.nlm.nih.gov/compound/5665) | Nøhr_2015, Ounissi_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:01 | 0:50 | 1/1/0 | 0/0/0 | 0/0/0 | 35,914/2,148 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ounissi_2019_reference](drugs/drug_vigabatrin/Vigabatrin_Ounissi2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ounissi M et al., Proposition of a Minimal Effective Dose…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1309](https://doi.org/10.1002/jcph.1309) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Nøhr_2015_reference](drugs/drug_vigabatrin/Vigabatrin_Nhr2015_reference.md) | — | 1-compartment (no model) | 3 | Nøhr MK et al., Is oral absorption of vigabatrin carrie…, European journal of pharmac… (2015) | [10.1016/j.ejps.2014.12.018](https://doi.org/10.1016/j.ejps.2014.12.018) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vigabatrin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABAT (inhibitor), SLC36A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Molimard_2024.pdf` | Molimard A et al., Optimization of vigabatrin dosage in ch…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16072](https://doi.org/10.1111/bcp.16072) | [38664899](https://pubmed.ncbi.nlm.nih.gov/38664899) | The paper describes a relevant population PK study, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract/evidence, likely residing in the results section or figures not fully excerpted. |
| `Nielsen_2014.pdf` | Nielsen JC et al., Population pharmacokinetics analysis of…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0172-z](https://doi.org/10.1007/s40262-014-0172-z) | [25172554](https://pubmed.ncbi.nlm.nih.gov/25172554) | The study reports a population PK model for vigabatrin with specific IIV percentages and covariate relationships, but the central numeric parameter estimates (e.g., median CL, V, ka) are not provided in the extracted text. |
| `Nøhr_2015.pdf` | Nøhr MK et al., Is oral absorption of vigabatrin carrie…, European journal of pharmac… (2015) | popPK | 10 | [10.1016/j.ejps.2014.12.018](https://doi.org/10.1016/j.ejps.2014.12.018) | [25562534](https://pubmed.ncbi.nlm.nih.gov/25562534) | The study reports a population PK model for vigabatrin in rats with specific quantitative parameters (Km, Vmax, bioavailability) provided in the text. |
| `Ounissi_2019.pdf` | Ounissi M et al., Proposition of a Minimal Effective Dose…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1309](https://doi.org/10.1002/jcph.1309) | [30192381](https://pubmed.ncbi.nlm.nih.gov/30192381) | The abstract provides explicit numeric values for population PK parameters (clearance, volume, absorption duration) for vigabatrin. |
| `Zheng_2025.pdf` | Zheng Q et al., Effects of melatonin on the pharmacokin…, Toxicology and applied phar… (2025) | popPK | 10 | [10.1016/j.taap.2025.117247](https://doi.org/10.1016/j.taap.2025.117247) | [39884559](https://pubmed.ncbi.nlm.nih.gov/39884559) | Study reports quantitative PK parameters for vigabatrin in rats, but specific numeric values are not listed in the provided abstract evidence. |
| `Yu_1994.pdf` | Yu DK et al., A comparison of population and standard…, Biopharmaceutics & drug dis… (1994) | popPK | 9 | [10.1002/bdd.2510150605](https://doi.org/10.1002/bdd.2510150605) | [7993985](https://pubmed.ncbi.nlm.nih.gov/7993985) | The paper describes a population PK study of vigabatrin in humans, but the abstract only summarizes qualitative findings and trends without providing specific numeric parameter values. |

<sub>queue written 2026-10-07T08:01:03.443191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2006 | irrelevant | 0 | 0 | This is an in-vitro mechanistic electrophysiology study using vigabatrin only as a positive control, containing no pharmacokinetic parameters. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | This is a simulation study using literature-derived PK models for 14 antiseizure medications; it does not report original quantitative disposition parameters for vigabatrin, and the specific numeric values are located in supplementary tables not provided in the evidence. |
| popPK | Molimard_2024 | relevant | 10 | 3 | The paper describes a relevant population PK study, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract/evidence, likely residing in the results section or figures not fully excerpted. |
| popPK | Nielsen_2014 | relevant | 10 | 3 | The study reports a population PK model for vigabatrin with specific IIV percentages and covariate relationships, but the central numeric parameter estimates (e.g., median CL, V, ka) are not provided in the extracted text. |
| popPK | Perucca_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rufinamide, with vigabatrin mentioned only as a comedication that affects rufinamide concentrations, not as the subject drug. |
| popPK | Steinborn_2005 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of carbamazepine, using vigabatrin only as a co-administered comparator to assess interaction effects, and does not report quantitative PK parameters for vigabatrin itself. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | This is a mechanistic electrophysiology study on a novel compound, and vigabatrin is used only as a tool compound/comparator, with no pharmacokinetic parameters reported. |
| popPK | Yu_1994 | relevant | 9 | 2 | The paper describes a population PK study of vigabatrin in humans, but the abstract only summarizes qualitative findings and trends without providing specific numeric parameter values. |
| popPK | Zheng_2025 | relevant | 10 | 2 | Study reports quantitative PK parameters for vigabatrin in rats, but specific numeric values are not listed in the provided abstract evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:01 UTC</sub>
