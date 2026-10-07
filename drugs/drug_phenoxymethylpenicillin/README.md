<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;phenoxymethylpenicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenoxymethylpenicillin_Obura2025_reference&quot;,&quot;label&quot;:&quot;Obura_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Obura2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenoxymethylpenicillin

- **generic name:** phenoxymethylpenicillin
- **ATC codes:** `J01CE02`, `J01CE10`
- **DrugBank:** [DB00417](https://go.drugbank.com/drugs/DB00417) · **PubChem:** [CID 6869](https://pubchem.ncbi.nlm.nih.gov/compound/6869)
- **molar mass:** 350.39 g/mol (C16H18N2O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Phenoxymethylpenicillin (penicillin V) is an antibiotic used to treat bacterial infections such as tonsillitis and staphylococcal or pneumococcal infections. It is an approved medicine, listed among WHO essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422215](https://www.wikidata.org/wiki/Q422215) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenoxymethylpenicillin | parent | 350.39 | C16H18N2O5S | DrugBank | [6869](https://pubchem.ncbi.nlm.nih.gov/compound/6869) | Rawson_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:14 | 1:34 | 1/0/2 | 2/0/0 | 0/0/0 | 108,713/7,621 | einfracz / qwen3.8-27b | 5 | 0/2 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Obura_2025_reference](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Obura2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Obura B et al., Pharmacokinetics of Intrapartum Benzylp…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70072](https://doi.org/10.1002/psp4.70072) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rawson_2021_mean](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Rawson2021_mean.md) | — | 1-compartment (no model) | 6 | Rawson TM et al., Exploring the Pharmacokinetics of Pheno…, Open forum infectious disea… (2021) | [10.1093/ofid/ofab573](https://doi.org/10.1093/ofid/ofab573) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rawson_2021_median](drugs/drug_phenoxymethylpenicillin/Phenoxymethylpenicillin_Rawson2021_median.md) | — | 1-compartment (no model) | 6 | Rawson TM et al., Exploring the Pharmacokinetics of Pheno…, Open forum infectious disea… (2021) | [10.1093/ofid/ofab573](https://doi.org/10.1093/ofid/ofab573) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Darkes_2002_clinical_cure_rate](drugs/drug_phenoxymethylpenicillin/pd_Darkes_2002_clinical_cure_rate.md) | clinical cure rate ← phenoxymethylpenicillin · model not identified | — | Darkes MJ et al., Cefditoren pivoxil, Drugs (2002) | [10.2165/00003495-200262020-00006](https://doi.org/10.2165/00003495-200262020-00006) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ellison_2009_clinical_outcome_success_failure](drugs/drug_phenoxymethylpenicillin/pd_Ellison_2009_clinical_outcome_success_failure.md) | clinical outcome (success/failure) ← phenoxymethylpenicillin · model not identified | — | Ellison SJ, The role of phenoxymethylpenicillin, am…, British dental journal (2009) | [10.1038/sj.bdj.2009.257](https://doi.org/10.1038/sj.bdj.2009.257) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenoxymethylpenicillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` transporter | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rawson_2019.pdf` | Rawson TM et al., Microneedle biosensors for real-time, m…, The Lancet. Digital health (2019) | popPK | 5 | [10.1016/S2589-7500(19)30131-1](https://doi.org/10.1016/S2589-7500(19)30131-1) | [33323208](https://pubmed.ncbi.nlm.nih.gov/33323208) | The study reports non-compartmental PK parameters (AUC, Cmax, Tmax) for phenoxymethylpenicillin in humans, but does not provide the specific disposition parameters (CL, V, ka) typically targeted for population modeling. |

<sub>queue written 2026-10-07T10:12:53.783509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cappelletty_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model comparing bactericidal activities, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for phenoxymethylpenicillin. |
| popPK | Obura_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for benzylpenicillin (penicillin G), not phenoxymethylpenicillin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:12 UTC</sub>
