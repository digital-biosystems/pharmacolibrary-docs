<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telbivudine&quot;}]"></div>

# telbivudine

- **generic name:** telbivudine
- **ATC codes:** `J05AF11`
- **DrugBank:** [DB01265](https://go.drugbank.com/drugs/DB01265) · **PubChem:** [CID 159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269)
- **molar mass:** 242.2286 g/mol (C10H14N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Telbivudine is a nucleoside analogue antiviral that was used to treat chronic hepatitis B. It is no longer available in the European Union, where its marketing authorisation has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413621](https://www.wikidata.org/wiki/Q413621) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| telbivudine | parent | 242.229 | C10H14N2O5 | DrugBank | [159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269) | Zhou_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 1:53 | 0/0/1 | 1/0/0 | 0/0/0 | 92,758/7,144 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2006_reference](drugs/drug_telbivudine/Telbivudine_Zhou2006_reference.md) | — | 1-compartment (no model) | 3 | Zhou XJ et al., Pharmacokinetics of telbivudine followi…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.874-879.2006](https://doi.org/10.1128/AAC.50.3.874-879.2006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Soto_2018_BATA](drugs/drug_telbivudine/pd_Soto_2018_BATA.md) | taste aversiveness (licking suppression, brief-access taste aversion) ← telbivudine · direct Emax (saturable) effect | — | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=telbivudine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DNA (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2009.pdf` | Zhou XJ et al., Population pharmacokinetics of telbivud…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009333555](https://doi.org/10.1177/0091270009333555) | [19395586](https://pubmed.ncbi.nlm.nih.gov/19395586) | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |

<sub>queue written 2026-10-07T16:25:17.024376+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jiang_2016 | irrelevant | 0 | 0 | This is a renal-function (eGFR) outcome study in CHB patients, not a PK study; no CL, V, ka, half-life, or population-PK parameters for telbivudine are reported. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | This is an efficacy/renal-function (eGFR) outcome study with no PK parameters (CL, V, ka, half-life, or PK model) for telbivudine. |
| popPK | Ren_2017 | irrelevant | 0 | 0 | Telbivudine is only mentioned as a comparator; the PK data concern GLS4, and no numeric PK parameters appear. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | This is a taste-aversion study; telbivudine is only one of nine tested compounds and no PK parameters are reported. |
| popPK | Zhou_2009 | relevant | 10 | 3 | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:25 UTC</sub>
