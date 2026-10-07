<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;cloxacillin&quot;}]"></div>

# cloxacillin

- **generic name:** cloxacillin
- **ATC codes:** `J01CF02`
- **DrugBank:** [DB01147](https://go.drugbank.com/drugs/DB01147) · **PubChem:** [CID 6098](https://pubchem.ncbi.nlm.nih.gov/compound/6098)
- **molar mass:** 435.881 g/mol (C19H18ClN3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Cloxacillin is a penicillin antibiotic used to treat staphylococcal infections, including skin, bone, respiratory, and urinary tract infections. It is an approved human and veterinary medicine and is included on the WHO list of essential medicines, so it remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422219](https://www.wikidata.org/wiki/Q422219) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cloxacillin | parent | 435.881 | C19H18ClN3O5S | DrugBank | [6098](https://pubchem.ncbi.nlm.nih.gov/compound/6098) | Nauta_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:21 | 3:03 | 0/0/2 | 1/0/0 | 0/0/0 | 177,170/13,271 | einfracz / qwen3.8-27b | 6 | 3/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Nauta_1975_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1975_reference.md) | — | 1-compartment (no model) | 2 | Nauta EH et al., Pharmacokinetics of flucloxacillin and…, British journal of clinical… (1975) | [10.1111/j.1365-2125.1975.tb01566.x](https://doi.org/10.1111/j.1365-2125.1975.tb01566.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Nauta_1976_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1976_reference.md) | — | 1-compartment (no model) | 4 | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Mattie_1997_CFU](drugs/drug_cloxacillin/pd_Mattie_1997_CFU.md) | numbers of CFU ← cloxacillin · direct Emax (saturable) effect | — | Mattie H et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.10.2083](https://doi.org/10.1128/AAC.41.10.2083) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cloxacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellouard_2023.pdf` | Bellouard R et al., Development and validation of a dosing…, The Journal of antimicrobia… (2023) | popPK | 10 | [10.1093/jac/dkad030](https://doi.org/10.1093/jac/dkad030) | [36760090](https://pubmed.ncbi.nlm.nih.gov/36760090) | The paper describes a population pharmacokinetic model for cloxacillin, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided text, only the resulting dose range and covariate (GFR). |
| `Courjon_2020.pdf` | Courjon J et al., A Population Pharmacokinetic Analysis o…, Antimicrobial agents and ch… (2020) | popPK | 10 | [10.1128/AAC.01562-20](https://doi.org/10.1128/AAC.01562-20) | [32988822](https://pubmed.ncbi.nlm.nih.gov/32988822) | This is a human population PK study for cloxacillin, but the provided abstract text describes the model and simulation results without listing the specific estimated PK parameter values (CL, V, etc.). |
| `Nauta_1976.pdf` | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) | [1277730](https://pubmed.ncbi.nlm.nih.gov/1277730) | The paper reports quantitative PK parameters (bioavailability, T1/2) for cloxacillin in healthy subjects using a 2-compartment model, although the specific distribution volume and clearance values are likely in the full text/figures not fully detailed in the abstract snippet. |

<sub>queue written 2026-10-07T11:19:01.328421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beijer_2026 | relevant | 10 | 2 | The study is a population PK model of cloxacillin in humans, but the specific numeric parameter estimates (CL, V, Q) are located in Supplementary Table S2, which is not included in the evidence provided. |
| popPK | Bellouard_2023 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for cloxacillin, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided text, only the resulting dose range and covariate (GFR). |
| popPK | Bins_1988 | relevant | 3 | 4 | Reports quantitative parameters for renal tubular excretion (EC50, Tmax) rather than standard compartmental PK parameters (CL, V, ka) for cloxacillin. |
| popPK | Bonnet_2004 | irrelevant | 0 | 0 | The study uses cloxacillin as a non-ototoxic comparator to evaluate teicoplanin's ototoxicity, reporting no pharmacokinetic parameters for cloxacillin. |
| popPK | Courjon_2020 | relevant | 10 | 3 | This is a human population PK study for cloxacillin, but the provided abstract text describes the model and simulation results without listing the specific estimated PK parameter values (CL, V, etc.). |
| popPK | Garcia_2012 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of antibiotic susceptibility in a THP-1 cell model, not a pharmacokinetic study reporting disposition parameters for cloxacillin. |
| popPK | Grabowski_2018 | relevant | 10 | 1 | The paper reports a population pharmacokinetic model for cloxacillin in cows, but the specific numeric parameter values (typical values for CL, V, etc.) are contained in Tables 1 and 2, which are described but not provided as readable numeric data in the evidence. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin, with cloxacillin only listed as a co-administered antibiotic in the combination therapy regimen. |
| popPK | Janknegt_1997 | irrelevant | 0 | 0 | The paper is a review discussing pharmacodynamic and economic considerations for antibiotic policy and does not report original quantitative pharmacokinetic parameter values for cloxacillin. |
| popPK | Keelaghan_2022 | irrelevant | 0 | 0 | The study investigates the effect of short-chain fatty acids on Cryptosporidium parvum growth in vitro, where cloxacillin is only mentioned as a historical comparator for microbiome depletion, not as a subject of pharmacokinetic analysis. |
| popPK | Marsot_2020 | irrelevant | 0 | 0 | The paper is a review that explicitly states no studies met inclusion criteria for cloxacillin, and thus contains no pharmacokinetic data for the subject drug. |
| popPK | Mattie_1997 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EC50, killing rates) rather than pharmacokinetic disposition parameters (CL, V) for cloxacillin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:19 UTC</sub>
