<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;niraparib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Niraparib_Gaffney2026_reference&quot;,&quot;label&quot;:&quot;Gaffney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Niraparib_Quesada2025_reference&quot;,&quot;label&quot;:&quot;Quesada_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_niraparib/Niraparib_Quesada2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# niraparib

- **generic name:** niraparib
- **ATC codes:** `L01XK02`, `L01XK52`
- **DrugBank:** [DB11793](https://go.drugbank.com/drugs/DB11793) · **PubChem:** [CID 24958200](https://pubchem.ncbi.nlm.nih.gov/compound/24958200)
- **molar mass:** 320.396 g/mol (C19H20N4O) — DrugBank
- **groups:** approved, investigational

## About

Niraparib is a PARP inhibitor anticancer medicine used to treat ovarian, fallopian tube, and peritoneal cancers. It is authorised in the European Union and is an approved drug, used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326660](https://www.wikidata.org/wiki/Q25326660) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| niraparib | parent | 320.396 | C19H20N4O | DrugBank | [24958200](https://pubchem.ncbi.nlm.nih.gov/compound/24958200) | Gaffney_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:11 | 1:54 | 2/2/0 | 0/0/1 | 0/0/0 | 162,627/11,182 | einfracz / qwen3.8-27b | 5 | 2/3 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gaffney_2026_reference](drugs/drug_niraparib/Niraparib_Gaffney2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 (+6 cov.) | Gaffney A et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70210](https://doi.org/10.1002/jcph.70210) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Quesada_2025_reference](drugs/drug_niraparib/Niraparib_Quesada2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Quesada S et al., Exposure-response relationship of nirap…, ESMO open (2025) | [10.1016/j.esmoop.2025.105054](https://doi.org/10.1016/j.esmoop.2025.105054) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chryssafidis_2022_reference](drugs/drug_niraparib/Niraparib_Chryssafidis2022_reference.md) | — | 1-compartment (no model) | 0 | Chryssafidis P et al., Re-writing Oral Pharmacokinetics Using…, Pharmaceutical research (2022) | [10.1007/s11095-022-03230-0](https://doi.org/10.1007/s11095-022-03230-0) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Monk_2024_reference](drugs/drug_niraparib/Niraparib_Monk2024_reference.md) | — | 1-compartment (no model) | 0 | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Monk_2024_PFS](drugs/drug_niraparib/pd_Monk_2024_PFS.md) | progression-free survival ← niraparib · time-to-event model | — | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Monk_2024_grade_3_thrombocytopenia](drugs/drug_niraparib/pd_Monk_2024_grade_3_thrombocytopenia.md) | grade ≥ 3 thrombocytopenia ← niraparib · categorical (graded) response model | — | Monk BJ et al., Niraparib Population Pharmacokinetics a…, Clinical therapeutics (2024) | [10.1016/j.clinthera.2024.06.001](https://doi.org/10.1016/j.clinthera.2024.06.001) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=niraparib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor/substrate | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CES1A1a (substrate), PARP1 (inhibitor), PARP2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Russu_2025.pdf` | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | popPK | 9 | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) | [40016438](https://pubmed.ncbi.nlm.nih.gov/40016438) | The paper describes a population PK model for niraparib in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| `Zhang_2020.pdf` | Zhang J et al., Phase I Pharmacokinetic Study of Nirapa…, The oncologist (2020) | popPK | 9 | [10.1634/theoncologist.2019-0565](https://doi.org/10.1634/theoncologist.2019-0565) | [31439812](https://pubmed.ncbi.nlm.nih.gov/31439812) | The study is a Phase I PK study reporting qualitative PK characteristics and a population PK analysis, but specific numeric values for clearance, volume, or inter-individual variability are not present in the provided text. |

<sub>queue written 2026-10-06T21:09:48.013725+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lewandowski_2026 | irrelevant | 2 | 2 | The study is a clinical pilot investigating glycemic adverse effects, and while it cites standard literature values for Vd and half-life in the introduction, it does not report original pharmacokinetic parameters or models. |
| popPK | Russu_2025 | relevant | 9 | 2 | The paper describes a population PK model for niraparib in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| popPK | Zhang_2020 | relevant | 9 | 3 | The study is a Phase I PK study reporting qualitative PK characteristics and a population PK analysis, but specific numeric values for clearance, volume, or inter-individual variability are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:10 UTC</sub>
