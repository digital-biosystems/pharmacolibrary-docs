<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemotil&quot;}]"></div>

# artemotil

- **generic name:** artemotil
- **ATC codes:** `P01BE04`
- **DrugBank:** [DB13851](https://go.drugbank.com/drugs/DB13851) · **PubChem:** not captured
- **molar mass:** 312.406 g/mol (C17H28O5) — DrugBank
- **groups:** approved

## About

Artemotil is an artemisinin-derivative antimalarial used to treat malaria. It is an approved antimalarial, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72443831](https://www.wikidata.org/wiki/Q72443831) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arteether | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |
| artemotil | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:34 | 2:21 | 0/1/0 | 0/0/0 | 0/0/0 | 38,636/1,638 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Benakis_1991_reference](drugs/drug_artemotil/Artemotil_Benakis1991_reference.md) | — | 1-compartment (no model) | 5 | Benakis A et al., Pharmacokinetics of arteether in dog, European journal of drug me… (1991) | [10.1007/BF03189978](https://doi.org/10.1007/BF03189978) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benakis_1991.pdf` | Benakis A et al., Pharmacokinetics of arteether in dog, European journal of drug me… (1991) | popPK | 10 | [10.1007/BF03189978](https://doi.org/10.1007/BF03189978) | [1823877](https://pubmed.ncbi.nlm.nih.gov/1823877) | Population/compartmental PK parameters (T1/2ka, half-life, Cmax, Cltot/F, AUC) for arteether (artemotil) are fully reported in the abstract; arteether is the subject drug. |

<sub>queue written 2026-10-07T06:34:21.530367+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Asimus_2007 | not_relevant | 0 | 0 | Study reports drug-drug (artemisinin effects on CYP probe substrates) interactions, not gene variant/genotype effects on artemotil PK/PD. |
| PGx | Burk_2012 | not_relevant | 2 | 3 | In vitro CAR/PXR ligand-binding and CYP induction study with no gene variant/genotype effect on artemotil PK/PD parameters. |
| PGx | Ekins_1999 | not_relevant | 1 | 1 | QSAR modeling of CYP2B6 substrate Km values; no gene variant/genotype effect on artemotil PK/PD reported. |
| popPK | Elsherbiny_2008 | irrelevant | 2 | 1 | Artemotil is not the subject drug; PK modeling is of mephenytoin probe and metabolites, with no artemotil disposition parameters or numeric values present. |
| PGx | Elsherbiny_2008 | not_relevant | 0 | 0 | Reports enzyme induction by artemisinins on mephenytoin PK (probe drug), not a gene variant effect on artemotil PK/PD. |
| PGx | Grace_1998 | not_relevant | 4 | 6 | Identifies CYP2B6/3A4/3A5 as enzymes metabolizing arteether via recombinant phenotyping, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Haq_2009 | not_relevant | 2 | 1 | Case report of arteether-induced mania with family history of chloroquine psychosis; no gene variant effect on PK/PD parameters quantified. |
| popPK | Li_1998 | irrelevant | 0 | 0 | Artemotil is not among the studied artemisinin derivatives (DQHS, artemether, arteether, artesunic acid, artelinic acid); no artemotil parameters reported. |
| PGx | Ooko_2015 | not_relevant | 4 | 3 | Gene expression correlates with in vitro IC50 (cytotoxicity), not a PK/PD parameter of artemotil, and no fitted effect sizes are reported. |
| PGx | Tripathi_2013 | not_relevant | 2 | 3 | Drug-drug interaction (ketoconazole CYP3A4 inhibition) on arteether, not a gene variant/genotype/phenotype effect on PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:34 UTC</sub>
