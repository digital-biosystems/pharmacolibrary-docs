<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;sodium stibogluconate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumStibogluconate_Verrest2021_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sodium stibogluconate

- **generic name:** sodium stibogluconate
- **ATC codes:** `P01CB02`
- **DrugBank:** [DB05630](https://go.drugbank.com/drugs/DB05630) · **PubChem:** [CID 56927674](https://pubchem.ncbi.nlm.nih.gov/compound/56927674)
- **molar mass:** 907.88 g/mol (C12H35Na3O26Sb2) — DrugBank
- **groups:** approved, investigational

## About

Sodium stibogluconate is an antiprotozoal medicine used to treat leishmaniasis. It is on the WHO list of essential medicines and remains an approved treatment, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2757844](https://www.wikidata.org/wiki/Q2757844) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_stibogluconate | metabolite | 907.88 | C12H35Na3O26Sb2 | DrugBank | [56927674](https://pubchem.ncbi.nlm.nih.gov/compound/56927674) | Chulay_1988, Jaser_1995, Zaghloul_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:54 | 2:30 | 0/3/1 | 2/1/0 | 0/0/0 | 150,143/9,221 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Verrest_2021_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Verrest L et al., Geographical Variability in Paromomycin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01036-8](https://doi.org/10.1007/s40262-021-01036-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chulay_1988_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Chulay1988_reference.md) | — | 1-compartment (no model) | 3 | Chulay JD et al., Pharmacokinetics of antimony during tre…, Transactions of the Royal S… (1988) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.067). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jaser_1995_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md) | — | 1-compartment (no model) | 6 | Jaser MA et al., Pharmacokinetics of antimony in patient…, Pharmaceutical research (1995) | [10.1023/a:1016251023427](https://doi.org/10.1023/a:1016251023427) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zaghloul_2010_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Zaghloul2010_reference.md) | — | 1-compartment (no model) | 3 | Zaghloul IY et al., Clinical efficacy and pharmacokinetics…, Journal of clinical pharmac… (2010) | [10.1177/0091270009347674](https://doi.org/10.1177/0091270009347674) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mehta_2010_Drug_activity_against_intracellular_Leishmania_amazonensis_amastigotes_egfp_fluorescence_in_PBMC_derived_macrophages](drugs/drug_sodium_stibogluconate/pd_Mehta_2010_Drug_activity_against_intracellular_Leishmania_am.md) | Drug activity against intracellular Leishmania amazonensis amastigotes (egfp fluorescence) in PBMC derived macrophages ← sodium stibogluconate · direct sigmoid Emax (Hill) effect | — | Mehta SR et al., Flow cytometric screening for anti-leis…, Experimental parasitology (2010) | [10.1016/j.exppara.2010.06.007](https://doi.org/10.1016/j.exppara.2010.06.007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mehta_2010_Drug_activity_against_intracellular_Leishmania_amazonensis_amastigotes_egfp_fluorescence_in_THP_1_cells](drugs/drug_sodium_stibogluconate/pd_Mehta_2010_Drug_activity_against_intracellular_Leishmania_am.md) | Drug activity against intracellular Leishmania amazonensis amastigotes (egfp fluorescence) in THP-1 cells ← sodium stibogluconate · direct sigmoid Emax (Hill) effect | — | Mehta SR et al., Flow cytometric screening for anti-leis…, Experimental parasitology (2010) | [10.1016/j.exppara.2010.06.007](https://doi.org/10.1016/j.exppara.2010.06.007) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Verrest_2024_parasite_load](drugs/drug_sodium_stibogluconate/pd_Verrest_2024_parasite_load.md) | blood parasite load (Leishmania kDNA by qPCR) ← sodium stibogluconate · direct linear effect | model (no simulator) | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Seifert_2010_inhibition](drugs/drug_sodium_stibogluconate/pd_Seifert_2010_inhibition.md) | percentage inhibition of infected macrophages ← sodium stibogluconate · direct sigmoid Emax (Hill) effect | — | Seifert K et al., In vitro activity of anti-leishmanial d…, The Journal of antimicrobia… (2010) | [10.1093/jac/dkp500](https://doi.org/10.1093/jac/dkp500) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_stibogluconate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jaser_1995.pdf` | Jaser MA et al., Pharmacokinetics of antimony in patient…, Pharmaceutical research (1995) | popPK | 10 | [10.1023/a:1016251023427](https://doi.org/10.1023/a:1016251023427) | [7724470](https://pubmed.ncbi.nlm.nih.gov/7724470) | Full PK parameters (ka, kd, Cmax, Tmax, TBC, Vd, renal clearance) for sodium stibogluconate-derived antimony are reported directly in the abstract. |
| `Zaghloul_2010.pdf` | Zaghloul IY et al., Clinical efficacy and pharmacokinetics…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009347674](https://doi.org/10.1177/0091270009347674) | [20663995](https://pubmed.ncbi.nlm.nih.gov/20663995) | Human PK study of sodium stibogluconate with numeric compartmental parameters (absorption half-life, elimination half-life, renal clearance) reported directly in the abstract. |
| `Zaghloul_2004.pdf` | Zaghloul IY et al., Effect of renal impairment on the pharm…, Annals of tropical medicine… (2004) | popPK | 8 | [10.1179/000349804X3171](https://doi.org/10.1179/000349804X3171) | [15667712](https://pubmed.ncbi.nlm.nih.gov/15667712) | Original PK study in hamsters with numeric CL, Cmax, AUC, half-life values reported directly in the abstract. |
| `Chulay_1988.pdf` | Chulay JD et al., Pharmacokinetics of antimony during tre…, Transactions of the Royal S… (1988) | popPK | 7 | not captured | [2845611](https://pubmed.ncbi.nlm.nih.gov/2845611) | Human PK study of sodium stibogluconate reporting compartmental half-lives (0.85, 2.02, 76 h) and concentrations, though CL/V values are not given. |

<sub>queue written 2026-10-07T08:52:54.311632+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coelho_2014 | irrelevant | 3 | 3 | Study is about meglumine antimoniate (a different pentavalent antimonial) in rats; sodium stibogluconate is only mentioned as a related drug, and only half-lives (0.6 h, &gt;24 h) are given without CL/V or a full PK model. |
| popPK | Ghosh_2021 | irrelevant | 0 | 0 | In vitro drug-susceptibility (EC50) study of Leishmania isolates; no PK disposition parameters for sodium stibogluconate are reported. |
| popPK | Kiderlen_2001 | irrelevant | 0 | 0 | In-vitro antileishmanial efficacy study; sodium stibogluconate is only a comparator EC50, no PK parameters. |
| popPK | Mehta_2010 | irrelevant | 0 | 0 | In vitro efficacy screening reporting EC50 values, not pharmacokinetic disposition parameters for sodium stibogluconate. |
| popPK | Mukhopadhyay_2011 | irrelevant | 0 | 0 | In-vitro study of parasite resistance (EC50 values), not a pharmacokinetic study of sodium stibogluconate disposition. |
| popPK | Seifert_2006 | irrelevant | 0 | 0 | Interaction study (FIC/AEI) with no PK disposition parameters for sodium stibogluconate. |
| popPK | Seifert_2010 | irrelevant | 0 | 0 | In vitro efficacy study reporting EC50 values, not pharmacokinetic disposition parameters for sodium stibogluconate. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | In vitro drug-interaction study with no pharmacokinetic parameters for sodium stibogluconate. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | In-vitro study of drug-resistant Leishmania cell lines with EC50 values, not a pharmacokinetic study of sodium stibogluconate disposition. |
| popPK | Verrest_2021 | irrelevant | 0 | 0 | This is a population-PK study of paromomycin; sodium stibogluconate is only a co-administered comparator drug with no PK parameters reported for it. |
| popPK | Verrest_2024 | irrelevant | 2 | 1 | This is a PK-PD model of Leishmania parasite dynamics; sodium stibogluconate is only one of several treatments, with no SSG disposition parameters estimated (only a literature half-life of 2 h used in a kinetic-pharmacodynamic assumption), and no numeric SSG PK values are present. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:53 UTC</sub>
