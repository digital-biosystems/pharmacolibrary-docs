<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;rupatadine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rupatadine_Santamara2017_base&quot;,&quot;label&quot;:&quot;Santamar\u00eda_2017_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rupatadine/Rupatadine_Santamara2017_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rupatadine

- **generic name:** rupatadine
- **ATC codes:** `R06AX28`
- **DrugBank:** [DB11614](https://go.drugbank.com/drugs/DB11614) · **PubChem:** [CID 133017](https://pubchem.ncbi.nlm.nih.gov/compound/133017)
- **molar mass:** 415.97 g/mol (C26H26ClN3) — DrugBank
- **groups:** approved, investigational

## About

Rupatadine is an antihistamine used to relieve symptoms of allergic conditions such as allergic rhinitis and urticaria. It is approved and used in several countries, though it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423450](https://www.wikidata.org/wiki/Q423450) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rupatadine | parent | 415.97 | C26H26ClN3 | DrugBank | [133017](https://pubchem.ncbi.nlm.nih.gov/compound/133017) | Santamaria_2021, Santamaría_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:36 | 1:19 | 1/0/2 | 1/1/0 | 0/0/0 | 100,109/6,782 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Santamaría_2017_base](drugs/drug_rupatadine/Rupatadine_Santamara2017_base.md) | ▶ model + simulator | 2-compartment, oral | 6 | Santamaría E et al., Population pharmacokinetic modelling of…, PloS one (2017) | [10.1371/journal.pone.0176091](https://doi.org/10.1371/journal.pone.0176091) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Santamaria_2021_reference](drugs/drug_rupatadine/Rupatadine_Santamaria2021_reference.md) | — | 2-compartment (no model) | 5 | Santamaria E et al., Rupatadine Oral Solution Titration by B…, Clinical pharmacology : adv… (2021) | [10.2147/CPAA.S312911](https://doi.org/10.2147/CPAA.S312911) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Santamaría_2017_final](drugs/drug_rupatadine/Rupatadine_Santamara2017_final.md) | — | 2-compartment (no model) | 5 | Santamaría E et al., Population pharmacokinetic modelling of…, PloS one (2017) | [10.1371/journal.pone.0176091](https://doi.org/10.1371/journal.pone.0176091) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Roquini_2024_Larval_motility](drugs/drug_rupatadine/pd_Roquini_2024_Larval_motility.md) | Larval motility ← rupatadine · direct sigmoid Emax (Hill) effect | — | Roquini DB et al., Antihistamines H, ACS omega (2024) | [10.1021/acsomega.4c04773](https://doi.org/10.1021/acsomega.4c04773) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Peña_2008_flare](drugs/drug_rupatadine/pd_Pe_a_2008_flare.md) | histamine-induced flare reaction ← rupatadine, desloratadine · indirect response — drug inhibits the production of histamine-induced flare reaction | — | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rupatadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), PTAFR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peña_2008.pdf` | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | popPK | 10 | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) | [18777946](https://pubmed.ncbi.nlm.nih.gov/18777946) | The abstract describes a population PKPD study with two-compartmental kinetics for rupatadine, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence. |

<sub>queue written 2026-10-07T21:35:21.886445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lin_2024 | irrelevant | 2 | 2 | The study is a bioequivalence trial reporting non-compartmental PK metrics (Cmax, AUC, t1/2, lambda_z) but does not report the compartmental/population-PK disposition parameters (CL, V, Q, ka) required for the extraction task. |
| popPK | Peña_2008 | relevant | 10 | 0 | The abstract describes a population PKPD study with two-compartmental kinetics for rupatadine, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence. |
| popPK | Roquini_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic screening of anthelmintic activity against parasites, containing no pharmacokinetic parameters for rupatadine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:35 UTC</sub>
