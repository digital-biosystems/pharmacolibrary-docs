<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;adefovir dipivoxil&quot;}]"></div>

# adefovir dipivoxil

- **generic name:** adefovir dipivoxil
- **ATC codes:** `J05AF08`
- **DrugBank:** [DB00718](https://go.drugbank.com/drugs/DB00718) · **PubChem:** [CID 60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871)
- **molar mass:** 501.4705 g/mol (C20H32N5O8P) — DrugBank
- **groups:** approved

## About

Adefovir dipivoxil is an antiviral nucleotide reverse transcriptase inhibitor used to treat chronic hepatitis B. It has been approved as a medicine, but its product was withdrawn in the European Union, so it is no longer marketed there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28851735](https://www.wikidata.org/wiki/Q28851735) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adefovir dipivoxil | parent | 501.471 | C20H32N5O8P | DrugBank | [60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871) | Dong_2024 |
| adefovir | metabolite | 273.189 | C8H12N5O4P | PubChem | [60172](https://pubchem.ncbi.nlm.nih.gov/compound/60172) | Dong_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:07 | 3:07 | 0/2/0 | 1/0/0 | 0/0/0 | 170,400/10,767 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dong_2024_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Dong2024_reference.md) | — | 1-compartment (no model) | 7 | Dong Q et al., Understanding adefovir pharmacokinetics…, European journal of clinica… (2024) | [10.1007/s00228-024-03673-x](https://doi.org/10.1007/s00228-024-03673-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Huang_2014_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Huang2014_reference.md) | — | 1-compartment (no model) | 0 | Huang J et al., Population pharmacokinetics of adefovir…, International journal of cl… (2014) | [10.5414/CP201928](https://doi.org/10.5414/CP201928) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Liu_2014_HBV_DNA](drugs/drug_adefovir_dipivoxil/pd_Liu_2014_HBV_DNA.md) | intracellular HBV replicative intermediates ← adefovir · direct sigmoid Emax (Hill) effect | — | Liu Y et al., rtM204Q may serve as a novel lamivudine…, PloS one (2014) | [10.1371/journal.pone.0089015](https://doi.org/10.1371/journal.pone.0089015) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2014.pdf` | Huang J et al., Population pharmacokinetics of adefovir…, International journal of cl… (2014) | popPK | 10 | [10.5414/CP201928](https://doi.org/10.5414/CP201928) | [24219967](https://pubmed.ncbi.nlm.nih.gov/24219967) | Population PK model of adefovir dipivoxil with all numeric parameters (CL, V2, Q, V3, ka, lag time) reported directly in the abstract. |

<sub>queue written 2026-10-07T15:04:52.134120+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2007 | irrelevant | 0 | 0 | Adefovir dipivoxil is only a comparator in an in-vitro synthesis/antiviral study; no PK disposition parameters for it are reported. |
| popPK | Fu_2008 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral activity study of prodrug design; adefovir dipivoxil is only a lead comparator and no PK parameters are reported. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | Clinical efficacy study of renal function (eGFR) outcomes; no PK disposition parameters for adefovir are reported. |
| popPK | Li_2019 | irrelevant | 2 | 1 | Adefovir dipivoxil is only a comparator; PK data concern derivative 6c and no numeric disposition parameters appear in the evidence. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | This is an HBV drug-resistance study; adefovir dipivoxil is only a rescue therapy/comparator with EC50 susceptibility data, no PK disposition parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | This is a virology/resistance study reporting EC50 values in cell culture, not pharmacokinetic disposition parameters for adefovir dipivoxil. |
| popPK | Pfister_2002 | irrelevant | 0 | 0 | Adefovir dipivoxil is only a background co-administered medication; the PK model and parameters concern amprenavir, not adefovir. |
| popPK | Pfister_2003 | irrelevant | 0 | 0 | Adefovir dipivoxil is only a co-administered drug in the study; all PK parameters reported are for efavirenz, nelfinavir, and indinavir, not adefovir. |
| popPK | Qi_2012 | irrelevant | 0 | 0 | In vitro antiviral study of a heteropolytungstate; adefovir dipivoxil is only a comparator with EC50/CC50 values, no PK parameters. |
| popPK | Su_2018 | irrelevant | 0 | 0 | This is a renal-safety (eGFR) trial of adefovir dipivoxil plus PEG-IFN; no PK disposition parameters (CL, V, ka, half-life, or PK model) for adefovir are reported. |
| popPK | Svarovskaia_2013 | irrelevant | 0 | 0 | This is a viral resistance/response study with no PK disposition parameters for adefovir dipivoxil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:04 UTC</sub>
