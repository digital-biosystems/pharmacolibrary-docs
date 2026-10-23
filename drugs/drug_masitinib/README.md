<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;masitinib&quot;}]"></div>

# masitinib

- **generic name:** masitinib
- **ATC codes:** `L01EX06`, `L01XE`, `L01XE22`
- **DrugBank:** [DB11526](https://go.drugbank.com/drugs/DB11526) · **PubChem:** not captured
- **molar mass:** 498.65 g/mol (C28H30N6OS) — DrugBank
- **groups:** investigational, vet_approved

## About

Masitinib is a protein kinase inhibitor investigated as a cancer treatment, including for pancreatic cancer, gastrointestinal stromal tumours, mastocytosis and amyotrophic lateral sclerosis. It is not approved for human use in the European Union, where marketing applications have been refused, but it is an approved veterinary medicine and remains investigational in humans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1907109](https://www.wikidata.org/wiki/Q1907109) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_3CLpro](drugs/drug_masitinib/pd_Drayman_2020_3CLpro.md) | 3CLpro activity ← masitinib · inhibition effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_3CLpro_2](drugs/drug_masitinib/pd_Drayman_2020_3CLpro_2.md) | 3CLpro activity ← masitinib · direct sigmoid Emax (Hill) effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_OC43](drugs/drug_masitinib/pd_Drayman_2020_OC43.md) | OC43 infection ← masitinib · direct sigmoid Emax (Hill) effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_SARS_CoV_2](drugs/drug_masitinib/pd_Drayman_2020_SARS_CoV_2.md) | SARS-CoV-2 infection ← masitinib · inhibition effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:52 | 1:11 | 0/0/0 | 1/0/0 | 0/0/0 | 26,261/3,488 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Drayman_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral and protease-inhibition study, with no quantitative masitinib pharmacokinetic parameters. |
| popPK | Tebib_2009 | irrelevant | 0 | 0 | This human efficacy and safety trial reports no quantitative masitinib disposition parameters, and no such values appear in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
