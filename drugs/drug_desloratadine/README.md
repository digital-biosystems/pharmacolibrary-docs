<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;desloratadine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desloratadine_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_desloratadine/Desloratadine_Li2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# desloratadine

- **generic name:** desloratadine
- **ATC codes:** `R06AX27`
- **DrugBank:** [DB00967](https://go.drugbank.com/drugs/DB00967) · **PubChem:** [CID 124087](https://pubchem.ncbi.nlm.nih.gov/compound/124087)
- **molar mass:** 310.821 g/mol (C19H19ClN2) — DrugBank
- **groups:** approved, investigational

## About

Desloratadine is a non-sedating antihistamine used to treat allergic rhinitis and urticaria. It is approved and widely used, with several products authorised in the European Union for these allergies.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418060](https://www.wikidata.org/wiki/Q418060) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desloratadine | parent | 310.821 | C19H19ClN2 | DrugBank | [124087](https://pubchem.ncbi.nlm.nih.gov/compound/124087) | Gupta_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:28 | 1:10 | 1/0/1 | 1/0/0 | 0/0/0 | 87,021/7,549 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span> | [Li_2023_reference](drugs/drug_desloratadine/Desloratadine_Li2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li G et al., An exploration on retro-construction of…, Translational pediatrics (2023) | [10.21037/tp-22-505](https://doi.org/10.21037/tp-22-505) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2007_reference](drugs/drug_desloratadine/Desloratadine_Gupta2007_reference.md) | — | 1-compartment (no model) | 1 | Gupta SK et al., Desloratadine dose selection in childre…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02859.x](https://doi.org/10.1111/j.1365-2125.2007.02859.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Peña_2008_flare](drugs/drug_desloratadine/pd_Pe_a_2008_flare.md) | histamine-induced flare reaction ← desloratadine · indirect response — drug inhibits the production of histamine-induced flare reaction | — | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desloratadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2007.pdf` | Gupta SK et al., Desloratadine dose selection in childre…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02859.x](https://doi.org/10.1111/j.1365-2125.2007.02859.x) | [17324243](https://pubmed.ncbi.nlm.nih.gov/17324243) | The study reports quantitative population pharmacokinetic parameters, specifically apparent clearance (CL/F), for desloratadine in children and adults directly in the abstract text. |
| `Peña_2008.pdf` | Peña J et al., Antihistaminic effects of rupatadine an…, European journal of drug me… (2008) | popPK | 9 | [10.1007/BF03191027](https://doi.org/10.1007/BF03191027) | [18777946](https://pubmed.ncbi.nlm.nih.gov/18777946) | The paper describes a population PK model for desloratadine (active metabolite of rupatadine), but the specific numeric parameter values are not provided in the evidence snippet. |

<sub>queue written 2026-10-07T21:27:19.723955+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anthes_2002 | irrelevant | 0 | 0 | The study characterizes the binding kinetics of desloratadine to histamine H1 receptors in vitro, not its pharmacokinetic disposition parameters in a biological system. |
| popPK | Iesce_2019 | irrelevant | 0 | 0 | The study focuses on ecotoxicity in aquatic organisms and reports LC50/EC50 values, not pharmacokinetic parameters for desloratadine. |
| popPK | Li_2023 | relevant | 8 | 2 | The study validates a PK modeling method using desloratadine in rats and mentions derived parameters like CLr in Table 1, but the specific numeric values are not present in the provided text evidence. |
| popPK | Lin_2024 | irrelevant | 3 | 4 | The study is a bioequivalence trial for rupatadine where desloratadine is a secondary metabolite, and it reports non-compartmental parameters (AUC, Cmax) rather than disposition parameters (CL, V, ka, half-life with volume) or population models for desloratadine. |
| popPK | Peña_2008 | relevant | 9 | 0 | The paper describes a population PK model for desloratadine (active metabolite of rupatadine), but the specific numeric parameter values are not provided in the evidence snippet. |
| popPK | Roquini_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of desloratadine's anthelmintic activity against parasites, containing no pharmacokinetic disposition parameters. |
| popPK | Salem_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loratadine, not desloratadine, and provides no data for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:27 UTC</sub>
